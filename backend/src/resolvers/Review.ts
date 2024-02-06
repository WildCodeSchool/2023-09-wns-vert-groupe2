import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { Review } from '../entities/review';

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
    if (rating < 1 || rating > 5) {
      throw new Error('The rating must be between 1 and 5.');
    }
    const review = new Review();
    review.rating = rating;
    review.comment = comment;
    await review.save();
    return review;
  }
}
