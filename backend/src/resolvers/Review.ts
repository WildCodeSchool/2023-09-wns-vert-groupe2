import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql';
import { Review } from '../entities/reviews';

@Resolver()
export class ReviewResolver {
  @Query(() => [Review])
  async reviews(): Promise<Review[]> {
    const reviews = await Review.find();
    return reviews;
  }

  @Mutation(() => Review)
  async createReview(
    @Arg('rating', () => Int) rating: number,
    @Arg('comment') comment: string
  ): Promise<Review> {
    const review = await Review.create({ rating, comment }).save();
    return review;
  }
}
