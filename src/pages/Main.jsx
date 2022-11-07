import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovie = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (auth.currentUser) {
      const { data } = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=${search}`
      );
      setMovies(data.results);
    } else {
      alert("Please Sign In...");
      navigate("/login");
    }
  };

  // console.log("movie:", movies);
  // console.log("auth", auth);

  return (
    <div className="main">
      <div className="mains">
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "flex",
            justifyContent: "center",
            paddingY: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ marginX: "1rem" }}
            color="secondary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={getMovie}>
            Contained
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {movies?.map((movie) => {
            const { original_title, poster_path, id, vote_average } = movie;
            return (
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
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                  alt=""
                  width="300px"
                />
                <Box sx={{ display: "flex", marginTop: "0.8rem" }}>
                  <div>
                    <Typography
                      variant="h6"
                      sx={{ width: "280px", fontSize: "1rem" }}
                    >
                      Overview
                    </Typography>
                    <Typography
                      variant="p"
                      component="h2"
                      sx={{ fontSize: "1rem" }}
                    >
                      {original_title}
                    </Typography>
                  </div>
                  <div>
                    {auth.currentUser && (
                      <Box
                        sx={{
                          backgroundColor: "green",
                          padding: "0.8rem",
                          borderRadius: "10px",
                        }}
                      >
                        {vote_average}
                      </Box>
                    )}
                  </div>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/detail", { state: id })}
                  >
                    View Detail
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};

export default Main;
