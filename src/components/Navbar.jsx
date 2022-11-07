import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useNavigate } from "react-router-dom";
import { auth, signOutUser } from "../auth/firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ButtonAppBar() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const onHandleLogOut = () => {
    navigate("/login");
    signOutUser();
    setUser({});
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <VideocamIcon
            onClick={() => navigate("/")}
            fontSize="large"
            sx={{ marginRight: "1rem" }}
          />
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Movie App
          </Typography>
          <Box color="inherit">{auth?.currentUser?.email}</Box>

          {auth.currentUser ? (
            <Button color="inherit" onClick={onHandleLogOut}>
              LogOut
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}

          {!auth.currentUser && (
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          )}

          <IconButton sx={{ marginLeft: "1rem" }}>
            <Avatar alt="Remy Sharp" src={auth?.currentUser?.photoURL} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
