import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ActorDetails } from "../types/movieAppTypes";
import img from "../images/film-poster-placeholder.png";

type Props = {
  actor: ActorDetails;
  onBack: () => void;
};

const ActorDetailsPage = ({ actor, onBack }: Props) => {
  return (
    <Grid container spacing={4} sx={{ padding: 3 }}>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onBack}>
          Back to Actors
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <img
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : img
          }
          alt={actor.name}
          style={{ width: "100%" }}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {actor.name}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            Department: {actor.known_for_department}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            Birthday: {actor.birthday ?? "Unknown"}
          </Typography>

          <Typography sx={{ mb: 1 }}>
            Place of Birth: {actor.place_of_birth ?? "Unknown"}
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
            Biography
          </Typography>

          <Typography>
            {actor.biography || "No biography available."}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ActorDetailsPage;