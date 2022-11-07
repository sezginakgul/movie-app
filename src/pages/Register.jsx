import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material//TextField";
import Box from "@mui/material//Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { registerUser } from "../auth/firebase";

const Register = () => {
  const { register, setRegister, setUser } = useContext(AuthContext);

  const eventHandleChange = (e) => {
    const log = { ...register, [e.target.name]: e.target.value };
    setRegister(log);
  };

  const onHandleSubmit = () => {
    registerUser(register.email, register.password);
    setUser(register);
    setRegister({
      email: "",
      password: "",
      displayName: "",
    });
  };

  // console.log("register:", register);
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
              REGISTER
            </Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              placeholder="Sign Up Your Name..."
              margin="normal"
              name="displayName"
              onChange={eventHandleChange}
              value={register?.displayName}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Sign Up Your Email Adress..."
              margin="normal"
              name="email"
              onChange={eventHandleChange}
              value={register?.email}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Sign Up Your Password..."
              margin="normal"
              name="password"
              onChange={eventHandleChange}
              value={register?.password}
            />
            <Button variant="contained" sx={{ mt: 2 }} onClick={onHandleSubmit}>
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
