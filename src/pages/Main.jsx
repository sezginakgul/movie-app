import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContextProvider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { toastWarnNotify } from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else if (!currentUser) {
      toastWarnNotify("Please log in to see details");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };

  return (
    <div className="main">
      <div className="mains">
        <Box
          sx={{
            borderTop: "4px solid green",

            backgroundColor: "#ED6C02",
            opacity: "0.8",
            display: "flex",
            justifyContent: "center",
            paddingY: "0.5rem",
          }}
        >
          <TextField
            className="searchBtn"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ marginX: "1rem", color: "#eee" }}
            color="success"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            padding: "1rem",
          }}
        >
          {loading ? (
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )}
        </Box>
      </div>
    </div>
  );
};

export default Main;
