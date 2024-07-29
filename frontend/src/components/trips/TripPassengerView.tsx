import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { toast } from "react-toast";
import { useAddAPassangerMutation, useGetTripByIdQuery } from "@/gql/graphql";
import { format } from "date-fns";
import Loader from "../Loader";

export default function TripPassengerView({
  trip,
}: {
  trip: {
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    createdAt: any;
    updatedAt: any;
    driver: {
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    };
    passengers: Array<{
      __typename?: "User";
      id: string;
      firstname: string;
      lastname: string;
    }>;
  };
}) {
  const { me, isLoggedIn } = useContext(AuthContext);
  const [addUserOnTrip, { loading, error, data }] = useAddAPassangerMutation();
  const dateOfTrip = format(new Date(trip?.date), "dd-MM-yyyy");

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography variant="h3" align="center" sx={{ marginBottom: "5px" }}>
          Trajet du {dateOfTrip}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography>{trip?.startLocation}</Typography>
          <ArrowForwardIcon fontSize="small" style={{ margin: "0 2rem" }} />
          <Typography>{trip?.endLocation}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography sx={{ marginRight: ".5rem" }}>
            <b>Arrêts Prévus :</b>
          </Typography>
          <Typography>{trip?.stopLocations}</Typography>
        </div>
        <Divider />
        <div style={{ marginTop: "1rem" }}>
          <Typography>
            Le Trajet est assuré par : {trip?.driver.firstname}{" "}
            {trip?.driver.lastname}
          </Typography>
          <Typography style={{ marginTop: ".5rem" }}>
            <b>Informations complementaires</b>
          </Typography>
          <Typography>
            - Trajet non fumeur <br />- Deux Places à l&apos;arrière
          </Typography>
          <Typography style={{ marginTop: ".5rem" }}>
            Prix à régler : {trip?.price}
          </Typography>
        </div>
        <div
          style={{
            marginTop: ".5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isLoggedIn ? (
            trip?.status === "pending" || trip?.status === "created" ? (
              <Button
                onClick={async () => {
                  try {
                    await addUserOnTrip({
                      variables: { id: trip.id, passengerId: me?.id as string },
                    });
                    toast.success("Vous avez été ajouter au trajet");
                  } catch (error) {
                    console.log(error);
                    toast.error("Une erreur est survenue");
                  }
                }}
                variant="outlined"
              >
                Choisir ce trajet
              </Button>
            ) : (
              <Typography>Trajet déjà complet</Typography>
            )
          ) : (
            <Link href={"/login"}>Connectez vous pour choisir ce trajet</Link>
          )}
        </div>
      </Paper>
    </Container>
  );
}
