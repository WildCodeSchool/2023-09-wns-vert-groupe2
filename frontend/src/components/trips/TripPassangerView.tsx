import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAddUserToTripMutation } from "@/gql/graphql";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import { toast } from "react-toast";

export default function TripPassangerView({ tripId }: { tripId: number }) {
  const { me, isLoggedIn } = useContext(AuthContext);
  const [addUserOnTrip, { loading, error, data }] = useAddUserToTripMutation();
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
          Trajet du 22-07-2024
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography>Strasbourg</Typography>
          <ArrowForwardIcon fontSize="small" style={{ margin: "0 2rem" }} />
          <Typography>Lièges</Typography>
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
          <Typography>Bordeaux, Paris</Typography>
        </div>
        <Divider />
        <div style={{ marginTop: "1rem" }}>
          <Typography>
            Le Trajet est assuré par : Bob KELSSO (4.5 étoiles)
          </Typography>
          <Typography style={{ marginTop: ".5rem" }}>
            <b>Informations complementaires</b>
          </Typography>
          <Typography>
            - Trajet non fumeur <br />- Deux Places à l&apos;arrière
          </Typography>
          <Typography style={{ marginTop: ".5rem" }}>
            Prix à régler : 40€
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
            <Button
              onClick={async () => {
                try {
                  await addUserOnTrip({
                    variables: { tripId: tripId, userId: me?.id as number },
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
            <Link href={"/login"}>Connectez vous pour choisir ce trajet</Link>
          )}
        </div>
      </Paper>
    </Container>
  );
}
