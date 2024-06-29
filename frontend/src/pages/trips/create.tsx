import Layout from "@/components/Layout";
import CreateTrip from "@/components/trips/CreateTrip";
import { AuthContext } from "@/providers/AuthProvider";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

export default function CreateJourney() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Layout>
      {isLoggedIn === true ? (
        <>
          <CreateTrip />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography>Pour pouvoir proposez un trajet, </Typography>
          <Link href={"/login"}>connectez-vous en premier lieu</Link>
        </div>
      )}
    </Layout>
  );
}
