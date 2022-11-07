import React, { useContext } from "react";
import { signIn, signInWithGoogle, auth } from "../auth/firebase";
import TextField from "@mui/material//TextField";
import Box from "@mui/material//Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login, setLogin, setUser, user } = useContext(AuthContext);
  const eventHandleChange = (e) => {
    const log = { ...login, [e.target.type]: e.target.value };
    setLogin(log);
  };
  // console.log("login", login);
  const eventHandleLogin = (e) => {
    signIn(user.email, user.password);
    setUser(auth);
    // console.log("user", user);
  };

  return (
    <Container
      maxWidth={"xxl"}
      className="login"
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
            <Typography variant="h3" align="center" m={1}>
              LOGIN
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Enter Your Email Adress..."
              margin="normal"
              onChange={eventHandleChange}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Enter Your Password..."
              margin="normal"
              onChange={eventHandleChange}
            />
            {/* <Typography onClick={() => ForgetEmail}>Forget Email?</Typography> */}
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={eventHandleLogin}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
