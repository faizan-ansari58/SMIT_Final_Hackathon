import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { url } from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const [signupData, SetSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = async (e) => {
    e.preventDefault();
    if (!signupData.name || !signupData.email || !signupData.password) {
      return console.log("please fill form");
    } else if (!validateEmail(signupData.email)) {
      setErrorMessage("Invalid Email");
      setOpen(true);
      return;
    }
    try {
      const { data } = await axios.post(`${url}/sign-up`, signupData);
      console.log(data);
      setSuccessOpen(true);
      setTimeout(() => {
        Navigate("/login");
      }, 3000);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
        setOpen(true);
        console.log(error.response.data.message);
      } else {
        console.log("An error occurred while processing your request.");
      }
    }
  };
  return (
    <Box
      pt={8}
      pb={8}
      sx={{
        backgroundImage: 'url(background_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Paper elevation={4} sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
              <Typography variant="h5" mb={3} color="textPrimary" fontFamily="-apple-system">
                Signup Page
              </Typography>
              <TextField
                label="User Name"
                variant="outlined"
                color="primary"
                size="small"
                value={signupData.name}
                onChange={(e) => SetSignupData({ ...signupData, name: e.target.value })}
                sx={{ width: '100%', marginBottom: '16px' }}
              />
              <TextField
                label="Email"
                variant="outlined"
                color="primary"
                size="small"
                value={signupData.email}
                onChange={(e) => SetSignupData({ ...signupData, email: e.target.value })}
                sx={{ width: '100%', marginBottom: '16px' }}
              />
              <TextField
                label="Password"
                variant="outlined"
                color="primary"
                size="small"
                type="password"
                value={signupData.password}
                onChange={(e) => SetSignupData({ ...signupData, password: e.target.value })}
                sx={{ width: '100%', marginBottom: '24px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleChange}
                sx={{ width: '100%', marginBottom: '8px', backgroundColor: '#f39c12', '&:hover': { backgroundColor: '#e67e22' } }}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => Navigate('/login')}
                sx={{ width: '100%', backgroundColor: '#e74c3c', '&:hover': { backgroundColor: '#c0392b' } }}
              >
                Login
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <Snackbar open={successopen} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert severity="success">Signup Successful</Alert>
      </Snackbar>
    </Box>
  );

};

export default Signup;
