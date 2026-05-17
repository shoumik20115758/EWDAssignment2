import { useState } from "react";
import Header from "../components/HeaderMovieList";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MovieList from "../components/MovieList";
import { BaseMovieListProps } from "../types/movieAppTypes";

type Props = BaseMovieListProps & {
  page?: number;
  totalPages?: number;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
};

const styles = {
  root: {
    padding: "20px",
  },
};

const MovieListPage = ({
  movies,
  title = "Discover Movies",
  onMovieSelect,
  page = 1,
  totalPages = 1,
  onNextPage,
  onPreviousPage,
}: Props) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const displayedMovies = movies
    .filter((m) =>
      (m.title ?? "").toLowerCase().includes(titleFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "title") {
        return (a.title ?? "").localeCompare(b.title ?? "");
      }

      if (sortOption === "rating") {
        return (b.vote_average ?? 0) - (a.vote_average ?? 0);
      }

      if (sortOption === "releaseDate") {
        return (
          new Date(b.release_date ?? "").getTime() -
          new Date(a.release_date ?? "").getTime()
        );
      }

      return 0;
    });

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>

      <Grid item xs={12} md={8} sx={{ mb: 3, pr: 2 }}>
        <TextField
          fullWidth
          label="Filter by movie title"
          variant="outlined"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={4} sx={{ mb: 3 }}>
        <TextField
          select
          fullWidth
          label="Sort movies"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <MenuItem value="default">Default order</MenuItem>
          <MenuItem value="title">Title A-Z</MenuItem>
          <MenuItem value="rating">Rating high-low</MenuItem>
          <MenuItem value="releaseDate">Release date newest</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
          <Button
            variant="outlined"
            disabled={page <= 1}
            onClick={onPreviousPage}
          >
            Previous Page
          </Button>

          <Typography variant="h6">
            Page {page} of {totalPages}
          </Typography>

          <Button
            variant="outlined"
            disabled={page >= totalPages}
            onClick={onNextPage}
          >
            Next Page
          </Button>
        </Box>
      </Grid>

      <Grid item container spacing={5}>
        <MovieList movies={displayedMovies} onMovieSelect={onMovieSelect} />
      </Grid>
    </Grid>
  );
};

export default MovieListPage;