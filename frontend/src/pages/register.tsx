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
import { useRegisterMutation } from "@/gql/graphql";

interface RegisterData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}
export default function RegisterPage() {
  const [dataRegister, setDateRegister] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [register, { data, loading, error }] = useRegisterMutation();
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await register({
        variables: {
          input: { email: dataRegister.email, password: dataRegister.password },
        },
      });
      if (data && data.register && data.register.token) {
        localStorage.setItem("token", data.register.token);
        router.push("/register");
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
          Inscription
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {error && <Alert severity="error">Error: {error.message}</Alert>}
          {data && data.register && data.register.token && (
            <Alert severity="success">
              Inscription réussie ! Redirection en cours...
            </Alert>
          )}
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setDateRegister({ ...dataRegister, password: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) =>
                  setDateRegister({ ...dataRegister, email: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <CircularProgress /> : "Sign Up"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                Vous avez déjà un compte ? Connectez-vous
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
