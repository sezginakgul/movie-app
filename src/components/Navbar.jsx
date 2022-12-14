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
import { logOut } from "../auth/firebase";
import { useLoginContext } from "../context/AuthContextProvider";

export default function ButtonAppBar() {
  const { currentUser } = useLoginContext();
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar className="navbar">
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <VideocamIcon
            onClick={() => navigate("/")}
            fontSize="large"
            sx={{ marginRight: "1rem" }}
          />
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "inline-block" } }}
            className="title"
          >
            Movie App
          </Typography>
        </Box>

        <Box>
          {currentUser && (
            <Button
              color="inherit"
              type="text"
              sx={{ display: { xs: "none", sm: "inline-block" } }}
            >
              {currentUser?.displayName}
            </Button>
          )}

          {currentUser ? (
            <Button color="inherit" onClick={() => logOut()}>
              LogOut
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}

          {!currentUser && (
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          )}

          <IconButton sx={{ marginLeft: "1rem" }}>
            <Avatar alt="Remy Sharp" src={currentUser?.photoURL} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
