import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import MovieListPage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { getMovies, getMovieDetails, getMovieImages } from "./api/tmdb-api";
import {
  DiscoverMovieOverviewProps,
  MovieDetailsProps,
  MovieImage,
} from "./types/movieAppTypes";

const App = () => {
  const [movies, setMovies] = useState<DiscoverMovieOverviewProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps | null>(
    null
  );
  const [images, setImages] = useState<MovieImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data.results ?? []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  const handleMovieSelect = async (id: number) => {
    setLoading(true);

    try {
      const movieDetails = await getMovieDetails(id);
      const movieImages = await getMovieImages(id);

      setSelectedMovie(movieDetails);
      setImages(movieImages.posters?.slice(0, 4) ?? []);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }

    setLoading(false);
  };

  if (loading) return <h1>Loading...</h1>;

  if (selectedMovie) {
    return (
  <MovieDetailsPage
    movie={selectedMovie}
    images={images}
    onBack={() => setSelectedMovie(null)}
  />
  );
  }

  return <MovieListPage movies={movies} onMovieSelect={handleMovieSelect} />;
};

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<App />);