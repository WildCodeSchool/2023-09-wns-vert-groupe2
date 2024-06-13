import { useState, useEffect } from "react";

import {
  Alert,
  Container,
  Card,
  Typography,
  Button,
  CardContent,
  Grid,
  TextField,
  Box,
  Divider,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import {
  CHANGE_PASSWORD_MUTATION,
  DELETE_ME_MUTATION,
  UPDATE_ME_MUTATION,
} from "@/graphql/mutations/user";

import { updateCurrentUser } from "@/slices/userSlice";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

export default function Account() {
  const router = useRouter();
  const dispatch = useDispatch();

  const me = useSelector((state) => state.user.currentUser);

  const [firstname, setFirstname] = useState(me?.firstname || "");
  const [lastname, setLastname] = useState(me?.lastname || "");
  const [phoneNumber, setPhoneNumber] = useState(me?.phoneNumber || "");
  const [description, setDescription] = useState(me?.description || "");
  const [birthdate, setBirthdate] = useState(
    me?.birthdate ? dayjs(me.birthdate) : ""
  );

  const [pictureUrl, setPictureUrl] = useState("");

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [
    updateMe,
    { data: dataUpdateMe, loading: loadingUpdateMe, error: errorUpdateMe },
  ] = useMutation(UPDATE_ME_MUTATION);

  const [changeMyPassword, { data, loading, error }] = useMutation(
    CHANGE_PASSWORD_MUTATION
  );

  const [
    deleteMe,
    { data: dataDeleteMe, loading: loadingDeleteMe, error: errorDeleteMe },
  ] = useMutation(DELETE_ME_MUTATION, {
    onCompleted: () => {
      handleCloseModal();
      localStorage.removeItem("token");
      router.push("/login");
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleClickOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmitUpdateMe = async (e) => {
    try {
      e.preventDefault();
      const { data } = await updateMe({
        variables: {
          input: {
            firstname,
            lastname,
            phoneNumber,
            description,
            birthdate: birthdate.toISOString(),
            pictureUrl,
          },
        },
      });

      if (data && data.updateMe) {
        dispatch(updateCurrentUser(data.updateMe));
      }
    } catch (e) {
      console.error("Update me error:", e);
    }
  };

  const handleSubmitNewPassword = async (e) => {
    try {
      e.preventDefault();
      await changeMyPassword({
        variables: { input: { password, repeatedPassword } },
      });
      setPassword("");
      setRepeatedPassword("");
    } catch (e) {
      console.error("Change password error:", e);
    }
  };

  const handleDeleteMyAccount = async () => {
    try {
      await deleteMe();
    } catch (e) {
      console.error("Error deleting account:", e);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordRepeat = () =>
    setShowPasswordRepeat((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordRepeat = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container component="main" maxWidth="md">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mon compte
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vos informations personnelles.
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitUpdateMe}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2} mt={0.5}>
                <Grid item xs={12}>
                  {dataUpdateMe && dataUpdateMe.updateMe && (
                    <Alert severity="success">
                      Informations personnelles modifiées !
                    </Alert>
                  )}

                  {errorUpdateMe && (
                    <Alert severity="error">Erreur : {error.message}</Alert>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    fullWidth
                    id="firstname"
                    label="Prénom"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="family-name"
                    fullWidth
                    id="lastname"
                    label="Nom"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="phoneNumber"
                    label="Téléphone"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <DatePicker
                    fullWidth
                    label="Date de naissance"
                    format="DD/MM/YYYY"
                    sx={{ width: "100%" }}
                    value={birthdate}
                    onChange={(newValue) => setBirthdate(newValue)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} container justifyContent="flex-end">
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={loadingUpdateMe}
                  >
                    Sauvegarder
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={2} mt={0.5}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    disabled
                    autoComplete="email"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={me?.email || ""}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
            </Box>

            <Box component="form" noValidate onSubmit={handleSubmitNewPassword}>
              <Grid container spacing={2} mt={0.5}>
                <Grid item xs={12}>
                  {data && data.changeMyPassword && (
                    <Alert severity="success">Mot de passe modifié !</Alert>
                  )}

                  {error && (
                    <Alert severity="error">Erreur : {error.message}</Alert>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Nouveau mot de passe
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Nouveau mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password-repeat">
                      Répéter nouveau mot de passe
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password-repeat"
                      type={showPasswordRepeat ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordRepeat}
                            onMouseDown={handleMouseDownPasswordRepeat}
                            edge="end"
                          >
                            {showPasswordRepeat ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Répéter nouveau mot de passe"
                      value={repeatedPassword}
                      onChange={(e) => setRepeatedPassword(e.target.value)}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} container justifyContent="flex-end">
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={loading}
                  >
                    Sauvegarder
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={2} mt={0.5}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12} container justifyContent="flex-end">
                  <Button
                    size="small"
                    color="error"
                    onClick={handleClickOpenModal}
                  >
                    Supprimer mon compte
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Supprimer mon compte</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Cette action est irréversible et supprimera définitivement votre
            compte. Aucun retour en arrière n'est possible.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal}>Annuler</Button>
          <LoadingButton
            onClick={handleDeleteMyAccount}
            color="error"
            loading={loadingDeleteMe}
          >
            Supprimer
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
