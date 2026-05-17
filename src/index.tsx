import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SiteHeader from "./components/SiteHeader";
import FantasyMoviePage from "./pages/FantasyMoviePage";
import MovieListPage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getMovieDetails,
  getMovieImages,
} from "./api/tmdb-api";
import {
  DiscoverMovieOverviewProps,
  MovieDetailsProps,
  MovieImage,
} from "./types/movieAppTypes";

type MovieView = "discover" | "popular" | "topRated" | "nowPlaying" | "fantasy";

const App = () => {
  const [movies, setMovies] = useState<DiscoverMovieOverviewProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps | null>(null);
  const [images, setImages] = useState<MovieImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<MovieView>("discover");

  const loadMovies = (view: MovieView) => {
    setLoading(true);
    setSelectedMovie(null);
    setCurrentView(view);

    const apiCall =
      view === "popular"
        ? getPopularMovies
        : view === "topRated"
        ? getTopRatedMovies
        : view === "nowPlaying"
        ? getNowPlayingMovies
        : getMovies;

    apiCall()
      .then((data) => {
        setMovies(data.results ?? []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMovies("discover");
  }, []);

  const handleNavigate = (view: MovieView) => {
    if (view === "fantasy") {
      setSelectedMovie(null);
      setCurrentView("fantasy");
      setLoading(false);
    } else {
      loadMovies(view);
    }
  };

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

  const getPageTitle = () => {
    if (currentView === "popular") return "Popular Movies";
    if (currentView === "topRated") return "Top Rated Movies";
    if (currentView === "nowPlaying") return "Now Playing Movies";
    return "Discover Movies";
  };

  if (loading) return <h1>Loading...</h1>;

  if (selectedMovie) {
    return (
      <>
        <SiteHeader onNavigate={handleNavigate} />
        <MovieDetailsPage
          movie={selectedMovie}
          images={images}
          onBack={() => setSelectedMovie(null)}
        />
      </>
    );
  }

  if (currentView === "fantasy") {
    return (
      <>
        <SiteHeader onNavigate={handleNavigate} />
        <FantasyMoviePage />
      </>
    );
  }

  return (
    <>
      <SiteHeader onNavigate={handleNavigate} />
      <MovieListPage
        movies={movies}
        title={getPageTitle()}
        onMovieSelect={handleMovieSelect}
      />
    </>
  );
};

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<App />);