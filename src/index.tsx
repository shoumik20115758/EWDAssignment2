import { createRoot } from "react-dom/client";
import MovieListPage from "./pages/HomePage";
import { sampleMovieDetails } from "./data/sampleData";

const movies = [
  sampleMovieDetails,
  sampleMovieDetails,
  sampleMovieDetails,
  sampleMovieDetails,
  sampleMovieDetails,
  sampleMovieDetails,
  sampleMovieDetails,
];

const App = () => {
  return <MovieListPage movies={movies} />;
};

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<App />);