import { Box, Button, Typography } from "@mui/material";
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
      <Box
        key={id}
        sx={{
          margin: "1rem auto",
          border: "2px solid white",
          borderRadius: "10px",
          boxShadow: "0 0 10px white",
          padding: "1rem",
          color: "#eee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "300px",
        }}
      >
        <img
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt="movie-card"
          width="300px"
          style={{ borderRadius: "15px", height: "430px" }}
        />
        <Box
          sx={{ display: "flex", marginTop: "0.8rem", padding: "0.5rem 1rem" }}
        >
          <div
            style={{
              width: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div style={{ height: "65px" }}>
              <Typography
                variant="h6"
                sx={{ width: "240px", fontSize: "1.4rem" }}
              >
                Overview
              </Typography>
              <Typography variant="p" component="h2" sx={{ fontSize: "1rem" }}>
                {title}
              </Typography>
            </div>
            <div>
              {currentUser && (
                <span className={`tag ${getVoteClass(vote_average)}`}>
                  {vote_average.toFixed(1)}
                </span>
              )}
            </div>
          </div>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
            onClick={() => {
              navigate("details/" + id);
              !currentUser && toastWarnNotify("Please log in to see details");
            }}
          >
            View Detail
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MovieCard;
