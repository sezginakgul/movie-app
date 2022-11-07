import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log("state", state);
  const [movieDetail, setMovieDetail] = useState([]);
  // const [movieVideo, setMovieVideo] = useState([]);
  const getMovieDetail = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${state}?api_key=${API_KEY}`
    );
    setMovieDetail(data);
  };
  // const getMovieVideo = async () => {
  //   const data = await axios(
  //     `https://api.themoviedb.org/3/movie/${state}/videos?api_key=${API_KEY}`
  //   );
  //   console.log("movie", data);
  // };
  useEffect(() => {
    return () => {
      getMovieDetail();
    };
  });

  // console.log("movieDetail", movieDetail);
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
  } = movieDetail;
  return (
    <div>
      <Card sx={{ maxWidth: "50%", margin: "1rem auto" }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt="green iguana"
          sx={{ objectFit: "contain", maxHeight: "600px" }}
        />
        <CardContent>
          <hr />
          <Typography gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tagline}
          </Typography>
          <hr />
          <Typography variant="h5" component="div">
            Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
          <hr />
          <Typography variant="body2">Popularity: {popularity}</Typography>
          <hr />
          <Typography variant="body2">Relase Date: {release_date}</Typography>
          <hr />
          <Typography variant="body2">Rate: {vote_average}</Typography>
          <hr />
          <Typography variant="body2">Total Vote: {vote_count}</Typography>
          <hr />
          <Typography variant="body2">
            Home Page: <a href={homepage}>{homepage}</a>{" "}
          </Typography>
          <hr />
        </CardContent>
        <CardActions sx={{ textAlign: "center" }}>
          <Button size="small" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MovieDetail;
