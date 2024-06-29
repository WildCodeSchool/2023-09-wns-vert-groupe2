import { Box, Skeleton, Typography } from "@mui/material";

export default function Loader() {
  return (
    <Skeleton
      sx={{
        marginTop: "5rm",
        height: "100%",
        width: "100%",
      }}
      animation="wave"
      variant="rounded"
    />
  );
}
