import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TiDeleteOutline } from "react-icons/ti";
import {
  GetTripByIdDocument,
  useRemoveAPassangerMutation,
} from "@/gql/graphql";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { toast } from "react-toast";

export default function PassengersTable({
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const [deletePassenger, { data, error, loading }] =
    useRemoveAPassangerMutation({
      onCompleted: (data) => {
        if (data) {
          toast.success("Opération réussie!");
        } else {
          toast.error("Une erreur est survenue :");
        }
      },
      refetchQueries: [{ query: GetTripByIdDocument }],
    });
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "35vw" }}>
      <Typography variant="h3">Passagers prévus</Typography>
      {trip.passengers.length == 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nom</TableCell>
                <TableCell align="center">Rating</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trip?.passengers?.map((passenger) => (
                <TableRow
                  key={passenger.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                >
                  <TableCell component="th" scope="passenger" align="center">
                    {passenger.firstname} {passenger.lastname}
                  </TableCell>
                  <TableCell align="center">Bob</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => setOpen(true)}>
                      <TiDeleteOutline color="#FF4842" />
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Désirez-vous vraiment supprimer ce passager ? <br />{" "}
                          <b>Cette action est définitive.</b>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Non</Button>
                        <Button
                          onClick={() => {
                            try {
                              deletePassenger({
                                variables: {
                                  id: trip.id,
                                  passengerId: passenger.id,
                                },
                              });
                              setOpen(false);
                            } catch (error) {
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>Aucun passager à trouver</Typography>
      )}
    </div>
  );
}
