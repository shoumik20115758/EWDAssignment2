import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import {
  MovieDetailsProps,
  MovieCastMember,
} from "../types/movieAppTypes";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
};

type Props = {
  movie: MovieDetailsProps;
  cast: MovieCastMember[];
  onActorSelect: (id: number) => void;
};

const MovieDetails = ({ movie, cast, onActorSelect }: Props) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>

        {(movie.genres ?? []).map((g) => (
          <li key={`${g.id}-${g.name}`}>
            <Chip label={g.name ?? "Unknown"} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label="Production Countries"
            sx={styles.chipLabel}
            color="primary"
          />
        </li>

        {(movie.production_countries ?? []).map((country) => (
          <li key={country.iso_3166_1}>
            <Chip label={country.name ?? "Unknown"} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime ?? 0} min.`} />

        <Chip
          icon={<MonetizationIcon />}
          label={`$${movie.revenue?.toLocaleString() ?? "0"}`}
        />

        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />

        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Cast
      </Typography>

      <Paper sx={{ p: 2 }}>
        {cast.map((actor) => (
          <Button
            key={actor.id}
            variant="outlined"
            sx={{ m: 1 }}
            onClick={() => onActorSelect(actor.id)}
          >
            {actor.name} as {actor.character}
          </Button>
        ))}
      </Paper>
    </>
  );
};

export default MovieDetails;