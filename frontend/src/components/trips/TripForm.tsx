import {
  GetAllTripsDocument,
  useDeleteTripMutation,
  useGetTripByIdQuery,
  useUpdateTripMutation,
} from "@/gql/graphql";
import React, { useState } from "react";
import { toast } from "react-toast";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Container,
  Paper,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";

export default function UpdateTrip({ tripId }: { tripId: string }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    data: dataTrip,
    loading: loadingTrip,
    error: errorTrip,
  } = useGetTripByIdQuery({
    variables: { id: tripId },
  });
  const trip = dataTrip?.getTripById;
  const [formState, setFormState] = useState({
    date: trip?.date,
    price: trip?.price,
    status: trip?.status,
    startLocation: trip?.startLocation,
    stopLocations: trip?.stopLocations,
    endLocation: trip?.endLocation,
  });

  const [updateTrip, { data, loading, error }] = useUpdateTripMutation({
    onCompleted: (data) => {
      if (data) {
        toast.success("Voyage modifié avec succès");
      } else {
        toast.error("Une erreur est survenue :");
      }
    },
    refetchQueries: [{ query: GetAllTripsDocument }],
  });
  const [deleteTrip] = useDeleteTripMutation({
    refetchQueries: [{ query: GetAllTripsDocument }],
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = new Date(formState.date).toISOString();

    const tripData = {
      ...formState,
      date: formattedDate,
    };
    updateTrip({ variables: { id: tripId, data: tripData } });
  };

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
          Modifier votre voyage
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Modifier"}
            </Button>
            <React.Fragment>
              <Button
                variant="outlined"
                sx={{ color: "red" }}
                onClick={handleClickOpen}
              >
                Supprimer
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Désirez-vous vraiment supprimer ce trajet ? <br />{" "}
                    <b>Cette action est définitive.</b>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Non</Button>
                  <Button
                    onClick={() => {
                      try {
                        deleteTrip({ variables: { id: tripId } });
                        toast.success("Le trajet a été supprimer avec succès");
                        setOpen(false);
                      } catch (error) {
                        toast.error("Une erreur est survenue.");
                        console.error(error);
                        setOpen(false);
                      }
                    }}
                    autoFocus
                  >
                    Oui
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </div>
        </form>
        {error && <Typography color="error">{error.message}</Typography>}
      </Paper>
    </Container>
  );
}
