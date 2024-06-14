import { useState, useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import { useRouter } from "next/router";
import { useLoginMutation } from "@/gql/graphql";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await login({
        variables: { input: { email, password } },
      });
      if (data && data.login && data.login.token) {
        localStorage.setItem("token", data.login.token);
        router.replace("/");
      }
    } catch (e) {
      console.error("Registration error:", e);
    }
  };

  {
    /*
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  */
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {error && <Alert severity="error">Error: {error.message}</Alert>}
          {data && data.login && data.login && (
            <Alert severity="success">Connexion Réussié! Redirection...</Alert>
          )}
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de Passe"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <CircularProgress /> : "Connexion"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Pas encore inscrit ?  Rejoignez nous"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
