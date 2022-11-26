import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material//TextField";
import Box from "@mui/material//Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { forgotPassword, signIn, signUpWithGoogle } from "../auth/firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  return (
    <Container
      maxWidth={"xxl"}
      sx={{
        mt: 2,
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item lg={7}>
          <Box
            sx={{
              margin: 0,
              padding: 0,
              width: "100%",
              height: "90vh",

              display: { xs: "none", lg: "flex" },
            }}
          >
            <img
              src="https://images.hdqwalls.com/download/early-evening-5k-fo-1920x1080.jpg"
              alt=""
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item lg={5} xs={12}>
          <Box
            sx={{
              margin: 0,
              padding: 0,
              backgroundImage: "center",
              height: "90vh",
              marginLeft: { lg: "2rem" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{ color: "#ff9800" }}
              m={1}
            >
              Sign In
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Enter Your Email Adress..."
              margin="normal"
              color="warning"
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Enter Your Password..."
              margin="normal"
              color="warning"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bolder",
              }}
            >
              <Button
                type="button"
                onClick={() => forgotPassword(email)}
                color="warning"
              >
                Forgot Password
              </Button>
              <Button onClick={() => navigate("/register")} color="warning">
                Sign Up
              </Button>
            </div>
            <Button
              variant="contained"
              color="warning"
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ mt: 2 }}
              onClick={handleGoogleProvider}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FcGoogle size={30} style={{ marginRight: "0.4rem" }} />
                <span>Continue With Google</span>
              </div>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
