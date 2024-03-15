import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "5vh",
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        padding: "1.5rem",
        bottom: "0",
        position: "fixed",
        justifyContent: "center",
      }}
    >
      <Typography fontSize="small"> Tout droits reservés © GODRIVE </Typography>
    </Box>
  );
}
