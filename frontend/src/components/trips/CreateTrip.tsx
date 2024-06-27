import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { GetAllTripsDocument, useCreateTripMutation } from "@/gql/graphql";
import { toast } from "react-toast";
import { useRouter } from "next/router";

const CreateTrip = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    date: "",
    price: 0,
    numberOfPassengers: 0,
    status: "created",
    startLocation: "",
    stopLocations: "",
    endLocation: "",
  });

  const [createTrip, { loading, error, data }] = useCreateTripMutation({
    onCompleted: (data) => {
      if (data) {
        toast.success("Opération réussie!");
        router.push(`/trips/${data.createTrip.id}`);
      } else {
        toast.error("Une erreur est survenue :");
      }
    },
    refetchQueries: [{ query: GetAllTripsDocument }],
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedDate = new Date(formState.date).toISOString();
    console.log(formattedDate);
    const tripData = {
      ...formState,
      date: formattedDate,
    };
    createTrip({ variables: { data: tripData } });

    setFormState({
      date: "",
      price: 0,
      status: "created",
      numberOfPassengers: 0,
      startLocation: "",
      stopLocations: "",
      endLocation: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "15px" }}>
          Proposer un trajet
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="date"
            label="Jour de départ"
            value={formState.date}
            onChange={(e) =>
              setFormState({ ...formState, date: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Select date"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Départ"
            value={formState.startLocation}
            onChange={(e) =>
              setFormState({ ...formState, startLocation: e.target.value })
            }
            placeholder="Entrez votre point de départ"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Les Arrêts en chemin"
            value={formState.stopLocations}
            onChange={(e) =>
              setFormState({ ...formState, stopLocations: e.target.value })
            }
            placeholder="Entrez vos points d'arrêts"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            type="text"
            label="Destination"
            value={formState.endLocation}
            onChange={(e) =>
              setFormState({ ...formState, endLocation: e.target.value })
            }
            placeholder="Entrez votre point d'arrivée"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            type="number"
            label="Prix par passager"
            value={formState.price}
            onChange={(e) =>
              setFormState({ ...formState, price: parseFloat(e.target.value) })
            }
            placeholder="Enter price"
            style={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            type="number"
            label="Nombre de passagers max."
            value={formState.numberOfPassengers}
            onChange={(e) =>
              setFormState({
                ...formState,
                numberOfPassengers: parseFloat(e.target.value),
              })
            }
            placeholder="Enter price"
            style={{ marginBottom: "20px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Proposez"}
          </Button>
        </form>
        {error && <Typography color="error">{error.message}</Typography>}
      </Paper>
    </Container>
  );
};

export default CreateTrip;
