import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SiteHeader from "./components/SiteHeader";
import FantasyMoviePage from "./pages/FantasyMoviePage";
import MovieListPage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorListPage from "./pages/ActorListPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getMovieDetails,
  getMovieImages,
  getPopularActors,
  getActorDetails,
  getMovieCredits,
} from "./api/tmdb-api";
import {
  DiscoverMovieOverviewProps,
  MovieDetailsProps,
  MovieImage,
  Actor,
  ActorDetails,
  MovieCastMember,
} from "./types/movieAppTypes";

type MovieView =
  | "discover"
  | "popular"
  | "topRated"
  | "nowPlaying"
  | "fantasy"
  | "actors";

const App = () => {
  const [movies, setMovies] = useState<DiscoverMovieOverviewProps[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps | null>(null);
  const [selectedActor, setSelectedActor] = useState<ActorDetails | null>(null);
  const [images, setImages] = useState<MovieImage[]>([]);
  const [cast, setCast] = useState<MovieCastMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<MovieView>("discover");

  const loadMovies = (view: MovieView) => {
    setLoading(true);
    setSelectedMovie(null);
    setSelectedActor(null);
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

  const loadActors = () => {
    setLoading(true);
    setSelectedMovie(null);
    setSelectedActor(null);
    setCurrentView("actors");

    getPopularActors()
      .then((data) => {
        setActors(data.results ?? []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching actors:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMovies("discover");
  }, []);

  const handleNavigate = (view: MovieView) => {
    if (view === "fantasy") {
      setSelectedMovie(null);
      setSelectedActor(null);
      setCurrentView("fantasy");
      setLoading(false);
    } else if (view === "actors") {
      loadActors();
    } else {
      loadMovies(view);
    }
  };

  const handleMovieSelect = async (id: number) => {
    setLoading(true);

    try {
      const movieDetails = await getMovieDetails(id);
      const movieImages = await getMovieImages(id);
      const movieCredits = await getMovieCredits(id);

      setSelectedMovie(movieDetails);
      setImages(movieImages.posters?.slice(0, 4) ?? []);
      setCast(movieCredits.cast?.slice(0, 10) ?? []);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }

    setLoading(false);
  };

  const handleActorSelect = async (id: number) => {
    setLoading(true);

    try {
      const actorDetails = await getActorDetails(id);
      setSelectedActor(actorDetails);
      setSelectedMovie(null);
    } catch (error) {
      console.error("Error fetching actor details:", error);
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

  if (selectedActor) {
    return (
      <>
        <SiteHeader onNavigate={handleNavigate} />
        <ActorDetailsPage
          actor={selectedActor}
          onBack={() => {
            setSelectedActor(null);
            loadActors();
          }}
        />
      </>
    );
  }

  if (selectedMovie) {
    return (
      <>
        <SiteHeader onNavigate={handleNavigate} />
        <MovieDetailsPage
          movie={selectedMovie}
          images={images}
          cast={cast}
          onActorSelect={handleActorSelect}
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

  if (currentView === "actors") {
    return (
      <>
        <SiteHeader onNavigate={handleNavigate} />
        <ActorListPage actors={actors} onActorSelect={handleActorSelect} />
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