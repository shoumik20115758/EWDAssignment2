import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type FantasyMovie = {
  title: string;
  overview: string;
  genres: string;
  releaseDate: string;
  runtime: string;
  productionCompanies: string;
};

const FantasyMoviePage = () => {
  const [movie, setMovie] = useState<FantasyMovie>({
    title: "",
    overview: "",
    genres: "",
    releaseDate: "",
    runtime: "",
    productionCompanies: "",
  });

  const [fantasyMovies, setFantasyMovies] = useState<FantasyMovie[]>([]);

  const handleChange = (field: keyof FantasyMovie, value: string) => {
    setMovie({ ...movie, [field]: value });
  };

  const handleSubmit = () => {
    if (!movie.title || !movie.overview) {
      alert("Please enter at least a title and overview.");
      return;
    }

    setFantasyMovies([...fantasyMovies, movie]);

    setMovie({
      title: "",
      overview: "",
      genres: "",
      releaseDate: "",
      runtime: "",
      productionCompanies: "",
    });
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h4">My Fantasy Movie</Typography>
        <Typography variant="body1">
          Create a basic fantasy movie record with title, overview, genres,
          release date, runtime, and production companies.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 3 }}>
          <TextField
            fullWidth
            label="Title"
            sx={{ mb: 2 }}
            value={movie.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Overview"
            sx={{ mb: 2 }}
            value={movie.overview}
            onChange={(e) => handleChange("overview", e.target.value)}
          />

          <TextField
            fullWidth
            label="Genres"
            placeholder="Action, Comedy, Drama"
            sx={{ mb: 2 }}
            value={movie.genres}
            onChange={(e) => handleChange("genres", e.target.value)}
          />

          <TextField
            fullWidth
            type="date"
            label="Release Date"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
            value={movie.releaseDate}
            onChange={(e) => handleChange("releaseDate", e.target.value)}
          />

          <TextField
            fullWidth
            label="Runtime"
            placeholder="120"
            sx={{ mb: 2 }}
            value={movie.runtime}
            onChange={(e) => handleChange("runtime", e.target.value)}
          />

          <TextField
            fullWidth
            label="Production Companies"
            placeholder="Studio name"
            sx={{ mb: 2 }}
            value={movie.productionCompanies}
            onChange={(e) =>
              handleChange("productionCompanies", e.target.value)
            }
          />

          <Button variant="contained" onClick={handleSubmit}>
            Create Fantasy Movie
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Created Fantasy Movies
        </Typography>

        {fantasyMovies.length === 0 ? (
          <Typography>No fantasy movies created yet.</Typography>
        ) : (
          fantasyMovies.map((m, index) => (
            <Paper key={index} sx={{ padding: 2, mb: 2 }}>
              <Typography variant="h6">{m.title}</Typography>
              <Typography>{m.overview}</Typography>
              <Typography>Genres: {m.genres}</Typography>
              <Typography>Release Date: {m.releaseDate}</Typography>
              <Typography>Runtime: {m.runtime} minutes</Typography>
              <Typography>
                Production Companies: {m.productionCompanies}
              </Typography>
            </Paper>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default FantasyMoviePage;