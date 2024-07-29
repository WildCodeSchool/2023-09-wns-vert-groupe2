import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SearchBar } from "./TripSearch";
import { Dispatch, SetStateAction } from "react";

import {
  useGetAllTripsQuery,
  useGetTripsByDateAndLocationsQuery,
} from "@/gql/graphql";
import { useRouter } from "next/router";
import Loader from "../Loader";

export default function TripsList({
  search,
  setSearch,
}: {
  search: SearchBar;
  setSearch: Dispatch<SetStateAction<SearchBar>>;
}) {
  const { data, loading, error } = useGetAllTripsQuery();
  const { data: searchData, loading: searchLoading } =
    useGetTripsByDateAndLocationsQuery({
      variables: {
        date: search.date,
        startLocation: search.start || "",
        endLocation: search.end || "",
      },
    });
  const trips = data?.trips;
  const tripsSearch = searchData?.getTripsByDateAndLocations;
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
        width: "85vw",
      }}
    >
      <Card
        sx={{ backgroundColor: "#FFFFFF", width: "30vw", maxHeight: "30vh" }}
      >
        <CardHeader title={<Typography>Trier par</Typography>} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Button
            onClick={() => setSearch({ ...search, orderBy: "price" })}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography>Prix Croissant</Typography>
            <CircleIcon
              sx={{ color: search.orderBy === "price" ? "#54F49A" : "#D9D9D9" }}
            />
          </Button>
          <Button
            onClick={() => setSearch({ ...search, orderBy: "hours" })}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography>Heure de Départ</Typography>
            <CircleIcon
              sx={{ color: search.orderBy === "hours" ? "#54F49A" : "#D9D9D9" }}
            />
          </Button>
          <Button
            onClick={() => setSearch({ ...search, orderBy: "duration" })}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography>Durée</Typography>
            <CircleIcon
              sx={{
                color: search.orderBy === "duration" ? "#54F49A" : "#D9D9D9",
              }}
            />
          </Button>
        </CardContent>
      </Card>
      <div>
        <Card
          sx={{
            backgroundColor: "#FFFFFF",
            width: "50vw",
            marginBottom: "2rem",
          }}
        >
          <CardContent>
            <Typography>Aujourd&apos;hui</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography fontSize="small">{search.start}</Typography>
                <ArrowForwardIcon
                  fontSize="small"
                  style={{ margin: "0 2rem" }}
                />
                <Typography fontSize="small">{search.end}</Typography>
              </div>
              <Typography>
                {trips ? trips.length : 0} trajets disponibles
              </Typography>
            </div>
          </CardContent>
        </Card>
        {!loading && tripsSearch ? (
          tripsSearch.map((trip, index: number) => {
            return <TripCard key={index} trip={trip} />;
          })
        ) : !loading && trips ? (
          trips.map((trip, index: number) => {
            return <TripCard key={index} trip={trip} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
interface Trip {
  id: string;
  date: Date;
  price: number;
  status: string;
  startLocation: string;
  stopLocations: string;
  endLocation: string;
  driver: {
    id: string;
    firstname: string;
    lastname: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
function TripCard({ trip }: { trip: Trip }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/trips/${trip.id}`)}
      style={{
        border: 0,
        background: "inherit",
        cursor: "pointer",
        margin: 0,
        padding: 0,
      }}
    >
      <Card
        sx={{
          backgroundColor: "#FFFFFF",
          width: "50vw",
          marginBottom: "2rem",
          maxHeight: "35vh",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <Typography>{trip.startLocation}</Typography>{" "}
            </div>
            <ArrowForwardIcon fontSize="small" style={{ margin: "0 2rem" }} />
            <Typography>{trip.endLocation}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <Typography>Arrêts prevus: {trip.stopLocations}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{trip.price} €</Typography>
            <div>
              <Typography>
                Proposé par {trip.driver.firstname} {trip.driver.lastname}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}
