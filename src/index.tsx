import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import MovieListPage from "./pages/HomePage";
import { getMovies } from "./api/tmdb-api";
import { DiscoverMovieOverviewProps } from "./types/movieAppTypes";

const App = () => {
  const [movies, setMovies] = useState<DiscoverMovieOverviewProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovies()
      .then((data) => {
        console.log("TMDB data:", data);
        setMovies(data.results ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Could not load movies. Check API key or network.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading movies...</h1>;
  if (error) return <h1>{error}</h1>;

  return <MovieListPage movies={movies} />;
};

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<App />);