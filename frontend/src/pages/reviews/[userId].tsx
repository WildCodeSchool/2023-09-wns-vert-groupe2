import { useRouter } from 'next/router';
import ReviewList from '@/components/reviews/ReviewList';

const UserReviewsPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  if (!userId) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Reviews</h1>
      <ReviewList userId={parseInt(userId as string, 10)} />
    </div>
  );
};

export default UserReviewsPage;
