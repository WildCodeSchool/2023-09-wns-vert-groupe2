import { useRouter } from "next/router";
import UpdateTrip from "@/components/UpdateTrip";

const UpdateTripPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  return <UpdateTrip tripId={parseInt(id as string, 10)} />;
};

export default UpdateTripPage;
