import { useState } from "react";
import Header from "../components/HeaderMovieList";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MovieList from "../components/MovieList";
import { BaseMovieListProps } from "../types/movieAppTypes";

const styles = {
  root: {
    padding: "20px",
  },
};

const MovieListPage = ({ movies, onMovieSelect }: BaseMovieListProps) => {
  const [titleFilter, setTitleFilter] = useState("");

  const displayedMovies = movies.filter((m) =>
    (m.title ?? "").toLowerCase().includes(titleFilter.toLowerCase())
  );

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Discover Movies"} />
      </Grid>

      <Grid item xs={12} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Filter by movie title"
          variant="outlined"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </Grid>

      <Grid item container spacing={5}>
        <MovieList movies={displayedMovies} onMovieSelect={onMovieSelect} />
      </Grid>
    </Grid>
  );
};

export default MovieListPage;