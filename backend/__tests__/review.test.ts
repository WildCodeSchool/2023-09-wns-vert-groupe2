import { ReviewResolver } from '../src/resolvers/Review';
import { Review } from '../src/entities/review';

describe('ReviewResolver', () => {
  let resolver: ReviewResolver;

  beforeEach(() => {
    resolver = new ReviewResolver();
  });

  describe('reviews', () => {
    it('should return an array of reviews', async () => {
      const mockReviews: Partial<Review>[] = [
        { id: 1, rating: 4, comment: 'Good product' },
        { id: 2, rating: 5, comment: 'Excellent service' },
      ];
      jest.spyOn(Review, 'find').mockResolvedValueOnce(mockReviews as Review[]);

      const result = await resolver.reviews();
      expect(result).toEqual(mockReviews as Review[]);
    });

    it('should return an empty array if no reviews found', async () => {
      jest.spyOn(Review, 'find').mockResolvedValueOnce([]);

      const result = await resolver.reviews();
      expect(result).toEqual([]);
    });
  });

  describe('reviewsForUser', () => {
    it('should return an array of reviews for a given userId', async () => {
      const userId = 1;
      const mockReviews: Partial<Review>[] = [
        { id: 1, rating: 4, comment: 'Good product' },
        { id: 2, rating: 5, comment: 'Excellent service' },
      ];
      jest.spyOn(Review, 'find').mockResolvedValueOnce(mockReviews as Review[]);

      const result = await resolver.reviewsForUser(userId);
      expect(result).toEqual(mockReviews as Review[]);
    });

    it('should return an empty array if no reviews found for the given userId', async () => {
      const userId = 999;
      jest.spyOn(Review, 'find').mockResolvedValueOnce([]);

      const result = await resolver.reviewsForUser(userId);
      expect(result).toEqual([]);
    });
  });

  describe('deleteReview', () => {
    it('should delete the review with the given reviewId', async () => {
      const reviewId = 1;
      jest
        .spyOn(Review, 'findOne')
        .mockResolvedValueOnce({ id: reviewId } as Review);
      jest.spyOn(Review, 'remove').mockResolvedValueOnce({} as any);

      const result = await resolver.deleteReview(reviewId);
      expect(result).toBe(true);
    });

    it('should return false if the review is not found', async () => {
      const reviewId = 999;
      jest.spyOn(Review, 'findOne').mockResolvedValueOnce(null);

      const result = await resolver.deleteReview(reviewId);
      expect(result).toBe(false);
    });
  });
});
