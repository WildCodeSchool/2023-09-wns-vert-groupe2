import { useRouter } from "next/router";
import UpdateTrip from "@/components/trips/TripForm";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Loader from "@/components/Loader";
import TripPassengerView from "@/components/trips/TripPassengerView";
import { useGetTripByIdQuery } from "@/gql/graphql";
import PassengersTable from "@/components/trips/PassengersTable";

function TripPage() {
  const router = useRouter();
  const { id } = router.query;
  const { me, isLoggedIn } = useContext(AuthContext);
  const { data, loading, error } = useGetTripByIdQuery({
    variables: { id: id as string },
  });

  if (!id) return <Loader />;
  if (loading) return <Loader />;

  return (
    <>
      {data && data?.getTripById ? (
        <>
          {isLoggedIn === true && me?.id === data?.getTripById?.driver?.id ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "baseline",
                width: "80vw",
              }}
            >
              <UpdateTrip trip={data?.getTripById} />
              <PassengersTable trip={data?.getTripById} />
            </div>
          ) : (
            <TripPassengerView trip={data?.getTripById} />
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default TripPage;
