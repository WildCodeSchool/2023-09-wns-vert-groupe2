import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SearchBar } from "./TripSearch";
import trips from "./trips.json";
import { Dispatch, SetStateAction } from "react";
import formatHours from "@/utils/formatHours";
import foundDuration from "@/utils/duration";

export default function TripsList({
  search,
  setSearch,
}: {
  search: SearchBar;
  setSearch: Dispatch<SetStateAction<SearchBar>>;
}) {
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
              <Typography>{trips.length} trajets disponibles</Typography>
            </div>
          </CardContent>
        </Card>
        {trips.map((trip, index: number) => {
          return <TripCard key={index} trip={trip} />;
        })}
      </div>
    </div>
  );
}
interface Trip {
  id: number;
  date: string;
  price: number;
  status: string;
  startLocation: string;
  stopLocations?: string[];
  departTime: string;
  arrivalTime: string;
  endLocation: string;
  passengers: string[];
  driver: string;
}
function TripCard({ trip }: { trip: Trip }) {
  const departHours = formatHours(trip.departTime);
  const endHours = formatHours(trip.arrivalTime);
  const duration = foundDuration(trip.departTime, trip.arrivalTime);
  return (
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
            <Typography typography="bold" sx={{ marginRight: "2rem" }}>
              {departHours.hours}:{departHours.minute}
            </Typography>
            <Typography>{trip.startLocation}</Typography>
          </div>
          <Typography>{trip.price} €</Typography>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <Typography variant="caption">
            {duration.heures}h{" "}
            {duration.minutes === 0 ? "00" : duration.minutes}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <Typography typography="bold" sx={{ marginRight: "2rem" }}>
              {endHours.hours}:{endHours.minute}
            </Typography>
            <Typography>{trip.endLocation}</Typography>
          </div>
          <Typography>Chauffeur {trip.driver}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
