import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const MovieDetail = () => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const {
    original_title,
    overview,
    tagline,
    release_date,
    poster_path,
    vote_count,
    vote_average,
    homepage,
    popularity,
  } = movieDetails;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    setLoading(true);
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [movieDetailBaseUrl]);

  return (
    <div className="details" style={{ padding: "0.7rem" }}>
      {loading && (
        <Box
          sx={{
            width: "100vw",
            height: "82.1vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="warning" size={70} />
        </Box>
      )}
      {!loading && (
        <Paper
          elevation={15}
          sx={{
            marginTop: "1rem",
            borderRadius: "10px",
            padding: "0.8rem",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <img
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt="movie-card"
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <Box sx={{ padding: "1rem" }}>
            <hr color="secondary" />

            <Typography variant="h6" component="div">
              {original_title}
            </Typography>

            <Typography variant="subtitle1">{tagline}</Typography>
            <hr color="secondary" />
            <Typography variant="h6" component="div" mt={1}>
              Overview
            </Typography>

            <Typography variant="subtitle1" component="div">
              {overview}
            </Typography>

            <hr color="secondary" />

            <Typography variant="subtitle1" component="div" my={1}>
              Popularity: {popularity}
            </Typography>

            <hr color="secondary" />

            <Typography variant="subtitle1" mb={1}>
              Relase Date: {release_date}
            </Typography>

            <hr color="secondary" />

            <Typography variant="subtitle1" mb={1}>
              Rate: {vote_average}
            </Typography>

            <hr color="secondary" />

            <Typography variant="subtitle1" mb={1}>
              Total Vote: {vote_count}
            </Typography>

            <hr color="secondary" />

            {homepage && (
              <>
                <Typography variant="subtitle1">
                  Home Page:
                  <a
                    href={homepage}
                    style={{
                      textDecoration: "none",
                      color: "secondary",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Go Site
                  </a>
                </Typography>
                <hr color="secondary" />
              </>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => navigate(-1)}
              sx={{ width: "80px" }}
            >
              Go Back
            </Button>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default MovieDetail;
