import { useState } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

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
          input: {
            email: dataRegister.email,
            password: dataRegister.password,
            firstname: dataRegister.firstName ? dataRegister.firstName : "",
            lastname: dataRegister.lastName ? dataRegister.lastName : "",
          },
        },
      });
      if (data && data.register && data.register.token) {
        localStorage.setItem("token", data.register.token);
        router.push("/");
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
                  setDateRegister({ ...dataRegister, email: e.target.value })
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
                  setDateRegister({ ...dataRegister, password: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="lastName"
                label="Nom"
                type="lastName"
                id="lastName"
                autoComplete="new-lastName"
                onChange={(e) =>
                  setDateRegister({ ...dataRegister, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="firstName"
                label="Prénom"
                type="firstName"
                id="firstName"
                autoComplete="new-firstName"
                onChange={(e) =>
                  setDateRegister({
                    ...dataRegister,
                    firstName: e.target.value,
                  })
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
            {loading ? <CircularProgress /> : "Inscription"}
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
