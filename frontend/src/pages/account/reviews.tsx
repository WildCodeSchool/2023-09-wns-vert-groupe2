import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Loader from "@/components/Loader";

import ReviewsAsTarget from "@/components/reviews/ReviewTableAsTarget";
import ReviewsAsAuthor from "@/components/reviews/ReviewTableAsAuthor";

const UserReviewsPage = () => {
  const { me } = useContext(AuthContext);
  if (!me) return <Loader />;
  return (
    <div style={{ width: "60vw" }}>
      <ReviewsAsTarget userId={me?.id as string} />
      <ReviewsAsAuthor userId={me?.id as string} />
    </div>
  );
};

export default UserReviewsPage;
