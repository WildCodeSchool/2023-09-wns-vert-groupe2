import { Button, Card, CardContent, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export interface SearchBar {
  start?: string;
  end?: string;
  date?: Date;
  orderBy?: "price" | "hours" | "duration";
}

export default function TripSearchBar({
  search,
  setSearch,
}: {
  search: SearchBar;
  setSearch: Dispatch<SetStateAction<SearchBar>>;
}) {
  return (
    <Card
      sx={{
        bgcolor: "primary.main",
      }}
    >
      <CardContent
        sx={{ display: "flex", justifyContent: "space-arround", m: 0 }}
      >
        <TextField
          sx={{ m: "1rem", bgcolor: "background.paper", borderRadius: "15px" }}
          value={search.start}
          onChange={(e) => setSearch({ ...search, start: e.target.value })}
          label="Départ"
          variant="outlined"
        />
        <TextField
          sx={{ m: "1rem", bgcolor: "background.paper", borderRadius: "15px" }}
          label="Arrivée"
          value={search.end}
          onChange={(e) => setSearch({ ...search, end: e.target.value })}
          variant="outlined"
        />
        <TextField
          sx={{ m: "1rem", bgcolor: "background.paper", borderRadius: "15px" }}
          label="Date"
          value={search.date}
          variant="outlined"
        />

        <Button
          sx={{
            m: "1rem",
            p: "0.5rem",
            bgcolor: "#54F49A",
            borderRadius: "15px",
          }}
        >
          Rechercher
        </Button>
      </CardContent>
    </Card>
  );
}
