import { useRouter } from "next/router";
import UpdateTrip from "@/components/trips/TripForm";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { Typography } from "@mui/material";
import Loader from "@/components/Loader";
import TripPassangerView from "@/components/trips/TripPassangerView";

function UpdateTripPage() {
  const router = useRouter();
  const { id } = router.query;
  const { me, isLoggedIn } = useContext(AuthContext);

  if (!id) return <Loader />;
  return (
    <>
      {isLoggedIn === true && me?.id === 3 ? (
        <UpdateTrip tripId={parseInt(id as string)} />
      ) : (
        <TripPassangerView tripId={parseInt(id as string)} />
      )}
    </>
  );
}

export default UpdateTripPage;
