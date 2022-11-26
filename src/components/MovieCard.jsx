import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, title, vote_average, id }) => {
  const { currentUser } = useLoginContext();
  const navigate = useNavigate();

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div style={{ margin: "auto" }}>
      <Paper
        elevation={15}
        sx={{
          marginTop: "1rem",
          borderRadius: "10px",
          padding: "0.8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "300px",
        }}
      >
        <img
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt="movie-card"
          style={{ width: "100%", borderRadius: "15px" }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.8rem",
          }}
        >
          <Box>
            <Typography variant="h6" color="primary">
              Overview
            </Typography>
            <Typography variant="p">{title}</Typography>
          </Box>
          <Box>
            {currentUser && (
              <span className={`tag ${getVoteClass(vote_average)}`}>
                {vote_average.toFixed(1)}
              </span>
            )}
          </Box>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, justifyContent: "center" }}
          onClick={() => {
            navigate("details/" + id);
            !currentUser && toastWarnNotify("Please log in to see details");
          }}
        >
          View Detail
        </Button>
      </Paper>
    </div>
  );
};

export default MovieCard;
