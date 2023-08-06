import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Paper,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { url } from "../utils";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [successopen, setSuccessOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return alert("Please enter all fields");
    } else if (!validateEmail(loginData.email)) {
      setErrorMessage("Invalid Email");
      setOpen(true);
      return;
    } else {
      try {
        const { data } = await axios.post(`${url}/sign-in`, loginData);
        // console.log(data.data.userId);
        localStorage.setItem("user", data?.data?.token);
        localStorage.setItem("userId", data?.data?.userId);
        setSuccessOpen(true);
        setTimeout(() => {
          Navigate("/");
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
          <Grid
            mt={4}
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper elevation={4} sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
            <Box component="form" mt={3}>
              <Typography variant="h5" mb={3} color="textPrimary" fontFamily="-apple-system">
                Login page
              </Typography>
              <Typography mt={1} variant="body2" mb={1}>
                Enter your Email
              </Typography>
              <TextField
                size="small"
                label="Email"
                variant="outlined"
                color="warning"
                value={loginData.email}
                onChange={(e) =>
                  SetLoginData({ ...loginData, email: e.target.value })
                }
                sx={{ width: '100%', marginBottom: '16px' }}
              />
              <Typography mt={1} mb={1} variant="body2">
                Enter your Password
              </Typography>
              <TextField
                label="Password"
                variant="outlined"
                color="primary"
                size="small"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  SetLoginData({ ...loginData, password: e.target.value })
                }
                sx={{ width: '100%', marginBottom: '24px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleChange}
                sx={{ width: '100%', marginBottom: '8px', backgroundColor: '#f39c12', '&:hover': { backgroundColor: '#e67e22' } }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => Navigate('/signup')}
                sx={{ width: '100%', backgroundColor: '#e74c3c', '&:hover': { backgroundColor: '#c0392b' } }}
              >
                New User
              </Button>
            </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <Snackbar
        open={successopen}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
      >
        <Alert severity="success">Login Successful</Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
