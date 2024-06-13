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

import Copyright from "@/components/Copyright";

import { useMutation, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ME } from "@/graphql/queries/user";
import { setCurrentUser } from "@/slices/userSlice";
import { REGISTER_MUTATION } from "@/graphql/mutations/user";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const client = useApolloClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await register({
        variables: { input: { email, password } },
      });
      if (data && data.register && data.register.token) {
        localStorage.setItem("token", data.register.token);

        const { data: userData } = await client.query({
          query: ME,
          fetchPolicy: "network-only",
        });

        dispatch(setCurrentUser(userData.me));
        
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {error && <Alert severity="error">Error: {error.message}</Alert>}
          {data && data.register && data.register.token && (
            <Alert severity="success">
              Registratrion successfull ! Redirecting...
            </Alert>
          )}
          <Grid container spacing={2} mt={0.5}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
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
                label="Password"
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
            {loading ? <CircularProgress /> : "Sign Up"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 10 }} />
    </Container>
  );
}
