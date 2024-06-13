import { Resolver, Query, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { Review } from '../entities/review';
import { UserContext } from '../types/User';
import { User } from '../entities/user';
import { checkIfRegistered } from '../utils/checker';
import { redisClient } from '../index';

@Resolver()
export class ReviewResolver {
  @Query(() => [Review])
  async reviews(): Promise<Review[]> {
    return await Review.find({ relations: ['author', 'target'] });
  }

  @Query(() => [Review])
  async reviewsForUser(
    @Arg('userId', () => Int) userId: number
  ): Promise<Review[]> {
    const redisKey = `user:${userId}:reviews`;

    try {
      const cachedReviews = await redisClient.get(redisKey);
      if (cachedReviews !== null) {
        console.log('Returning cached data:', cachedReviews);
        return JSON.parse(cachedReviews);
      } else {
        const reviews = await Review.find({
          where: {
            target: {
              id: userId,
            },
          },
          relations: ['author', 'target'],
        });

        console.log('Caching data:', JSON.stringify(reviews));
        await redisClient.set(redisKey, JSON.stringify(reviews), { EX: 3600 });

        return reviews;
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des critiques :', error);
      throw new Error('Impossible de récupérer les critiques');
    }
  }

  @Mutation(() => Boolean)
  async deleteReview(
    @Arg('reviewId', () => Int) reviewId: number,
    @Ctx() ctx: UserContext
  ): Promise<Boolean> {
    try {
      checkIfRegistered(ctx.user);
      const review = await Review.findOne({ where: { id: reviewId } });
      if (!review) throw new Error('Review not found!');

      if (review.author.id !== ctx.user.id) {
        throw new Error('You are not authorized to delete this review!');
      }

      await Review.remove(review);
      return true;
    } catch (error) {
      console.error('Failed to delete review:', error);
      return false;
    }
  }

  @Mutation(() => Review)
  async createReview(
    @Arg('rating', () => Int) rating: number,
    @Arg('comment') comment: string,
    @Arg('targetId', () => Int) targetId: number,
    @Ctx() ctx: UserContext
  ): Promise<Review> {
    checkIfRegistered(ctx.user);
    const me = await User.findOne({ where: { id: ctx.user.id } });
    if (!me) throw new Error('User not found!');

    const targetUser = await User.findOne({ where: { id: targetId } });
    if (!targetUser) throw new Error('User not found!');

    const review = new Review();
    review.rating = rating;
    review.comment = comment;
    review.author = me;
    review.target = targetUser;

    await review.save();
    return review;
  }
}
