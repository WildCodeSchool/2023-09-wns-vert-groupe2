import Loader from "@/components/Loader";
import TripsAsDriver from "@/components/user/TripsAsDriver";
import TripsAsPassenger from "@/components/user/TripsAsPassager";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export default function UserTripsPage() {
  const { me } = useContext(AuthContext);
  if (!me) return <Loader />;

  return (
    <div
      style={{
        width: "60vw",
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <TripsAsDriver userId={me?.id as string} />
      <TripsAsPassenger userId={me?.id as string} />
    </div>
  );
}
