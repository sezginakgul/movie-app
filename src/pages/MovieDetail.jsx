import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const MovieDetail = () => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState("");
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
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  return (
    <div className="details">
      <Card
        sx={{
          width: "430px",
          margin: "0 auto ",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <CardMedia
          component="img"
          image={poster_path ? baseImageUrl + poster_path : defaultImage}
          alt="green iguana"
          sx={{
            objectFit: "contain",
            maxHeight: "600px",
            marginTop: "0.8rem",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <hr style={{ opacity: 0 }} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ backgroundColor: "black" }}
          >
            {original_title}
          </Typography>
          <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
            {tagline}
          </Typography>
          <hr style={{ opacity: 0 }} />
          <Typography
            variant="h5"
            component="div"
            sx={{ backgroundColor: "black" }}
          >
            Overview
          </Typography>
          <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
            {overview}
          </Typography>
          <hr style={{ opacity: 0 }} />
          <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
            Popularity: {popularity}
          </Typography>
          <hr style={{ opacity: 0 }} />
          <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
            Relase Date: {release_date}
          </Typography>
          <hr style={{ opacity: 0 }} />
          <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
            Rate: {vote_average}
          </Typography>
          <hr style={{ opacity: 0 }} />
          <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
            Total Vote: {vote_count}
          </Typography>
          <hr style={{ opacity: 0 }} />
          {homepage && (
            <Typography variant="subtitle1" sx={{ backgroundColor: "black" }}>
              Home Page:{" "}
              <a href={homepage} style={{ color: "white" }}>
                {homepage}
              </a>
            </Typography>
          )}
          <hr style={{ opacity: 0 }} />
        </CardContent>
        <CardActions sx={{ textAlign: "center" }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{ width: "80px", margin: "0 auto" }}
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MovieDetail;
