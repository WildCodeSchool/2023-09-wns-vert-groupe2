import { Resolver, Query, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { Review } from '../entities/review';
import { UserContext } from './User';

@Resolver()
export class ReviewResolver {
  @Query(() => [Review])
  async reviews(): Promise<Review[]> {
    try {
      const reviews = await Review.find();
      return reviews;
    } catch (error) {
      throw new Error('Failed to fetch reviews: ' + error.message);
    }
  }
  @Query(() => [Review])
  async reviewsForUser(
    @Arg('userId', () => Int) userId: number
  ): Promise<Review[]> {
    try {
      const reviews = await Review.find({ where: { userId } });
      return reviews;
    } catch (error) {
      throw new Error('Failed to fetch reviews for user: ' + error.message);
    }
  }
  @Mutation(() => Review)
  async createReview(
    @Arg('rating', () => Int) rating: number,
    @Arg('comment') comment: string,
    @Ctx() ctx: UserContext
  ): Promise<Review> {
    if (!ctx.user) {
      throw new Error('Not authenticated!');
    }

    try {
      const review = new Review();
      review.rating = rating;
      review.comment = comment;
      review.user = ctx.user;
      await review.save();
      return review;
    } catch (error) {
      throw new Error('Failed to create review: ' + error.message);
    }
  }
}
