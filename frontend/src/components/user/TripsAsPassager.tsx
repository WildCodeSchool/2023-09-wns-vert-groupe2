import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useGetAllTripsOfDriverQuery,
  useGetAllTripsOfPassengerQuery,
} from "@/gql/graphql";
import Loader from "../Loader";
import { Alert, Typography } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";

export default function TripsAsPassenger({ userId }: { userId: string }) {
  const { loading, error, data } = useGetAllTripsOfPassengerQuery({
    variables: { passengerId: userId },
  });

  if (loading) return <Loader />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <>
      <Typography variant="h3">Trajets en tant que passager</Typography>
      {data && data?.getAllTripsOfPassenger.length > 0 ? (
        <TripsTable data={data?.getAllTripsOfPassenger} />
      ) : (
        <Typography align="center">Aucun trajet à afficher</Typography>
      )}
    </>
  );
}

function TripsTable({
  data,
}: {
  data: {
    __typename?: "Trip";
    id: string;
    date: any;
    price: number;
    status: string;
    startLocation: string;
    stopLocations: string;
    endLocation: string;
    numberOfPassengers: number;
    createdAt: any;
    updatedAt: any;
    driver: {
      __typename?: "User";
      email: string;
      firstname: string;
      lastname: string;
    };
  }[];
}) {
  const router = useRouter();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Départ</TableCell>
            <TableCell align="center">Arrivée</TableCell>
            <TableCell align="center">Statut</TableCell>
            <TableCell align="center">Chauffeur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((trip) => (
            <TableRow
              key={trip.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              onClick={() => router.push(`/trips/${trip.id}`)}
            >
              <TableCell component="th" scope="trip" align="center">
                {moment(trip.date).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="center">{trip.startLocation}</TableCell>
              <TableCell align="center">{trip.endLocation}</TableCell>
              <TableCell align="center">
                {trip.status === "created"
                  ? "Créé"
                  : trip.status === "pending"
                  ? "En cours"
                  : trip.status === "completed"
                  ? "Complet"
                  : trip.status === "ended"
                  ? "Terminé"
                  : "Supprimé"}
              </TableCell>
              <TableCell align="center">
                {trip.driver.lastname} {trip.driver.firstname}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
