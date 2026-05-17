import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../components/HeaderMovieList";
import { Actor } from "../types/movieAppTypes";
import img from "../images/film-poster-placeholder.png";

type Props = {
  actors: Actor[];
  onActorSelect: (id: number) => void;
};

const ActorListPage = ({ actors, onActorSelect }: Props) => {
  return (
    <Grid container sx={{ padding: 3 }}>
      <Grid item xs={12}>
        <Header title="Popular Actors" />
      </Grid>

      <Grid item container spacing={4}>
        {actors.map((actor) => (
          <Grid key={actor.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardHeader title={actor.name} />

              <CardMedia
                sx={{ height: 450 }}
                image={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : img
                }
              />

              <CardContent>
                <Typography>
                  Department: {actor.known_for_department}
                </Typography>
                <Typography>
                  Popularity: {actor.popularity.toFixed(1)}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => onActorSelect(actor.id)}
                >
                  Actor Bio
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ActorListPage;