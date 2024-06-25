import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        GoDrive
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
