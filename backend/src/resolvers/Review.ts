import { Resolver, Query, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { Review } from '../entities/review';
import { UserContext } from '../types/User';
import { User } from '../entities/user';

@Resolver()
export class ReviewResolver {
	@Query(() => [Review])
	async reviews(): Promise<Review[]> {
		return await Review.find();
	}

	@Query(() => [Review])
	async reviewsForUser(
		@Arg('userId', () => Int) userId: number
	): Promise<Review[]> {
		return await Review.find({
			where: {
				user: {
					id: userId,
				},
			},
		});
	}

	@Mutation(() => Boolean)
	async deleteReview(
		@Arg('reviewId', () => Int) reviewId: number
	): Promise<Boolean> {
		try {
			const review = await Review.findOne({ where: { id: reviewId } });
			if (!review) throw new Error('Review not found!');
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
		@Ctx() ctx: UserContext
	): Promise<Review> {
		if (!ctx.user) throw new Error('Not authenticated!');
		const user = await User.findOne({ where: { id: ctx.user.id } });
		if (!user) throw new Error('User not found!');
		const review = new Review();
		review.rating = rating;
		review.comment = comment;
		review.user = user;
		await review.save();
		return review;
	}
}
