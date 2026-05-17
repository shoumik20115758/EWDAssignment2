/// <reference types="vite/client" />

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const fetchFromTMDB = (url: string) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch TMDB data");
    }
    return response.json();
  });
};

export const getMovies = () => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getPopularMovies = () => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getTopRatedMovies = () => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getNowPlayingMovies = () => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getMovieDetails = (id: number) => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const getMovieImages = (id: number) => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`
  );
};

export const getPopularActors = () => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const getActorDetails = (id: number) => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const getMovieCredits = (id: number) => {
  return fetchFromTMDB(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
};