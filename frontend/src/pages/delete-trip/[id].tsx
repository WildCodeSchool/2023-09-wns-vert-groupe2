import { useRouter } from "next/router";
import DeleteTrip from "@/components/DeleteTrip";

const DeleteTripPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  return <DeleteTrip tripId={parseInt(id as string, 10)} />;
};

export default DeleteTripPage;
