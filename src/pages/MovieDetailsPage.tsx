import MovieHeader from "../components/HeaderMovie";
import MovieDetails from "../components/MovieDetails";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { MoviePageProps } from "../types/movieAppTypes";

type Props = MoviePageProps & {
  onBack?: () => void;
};

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: "100%",
    height: "auto",
  },
};

const MoviePage = ({ movie, images, onBack }: Props) => {
  return (
    <>
      <Button variant="contained" sx={{ m: 2 }} onClick={onBack}>
        Back to Movie List
      </Button>

      {movie ? (
        <>
          <MovieHeader {...movie} />

          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <ImageList sx={styles.imageListRoot} cols={1}>
                {images.map((image) => (
                  <ImageListItem
                    key={image.file_path}
                    sx={styles.gridListTile}
                    cols={1}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt="Movie poster"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>

            <Grid item xs={9}>
              <MovieDetails {...movie} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default MoviePage;