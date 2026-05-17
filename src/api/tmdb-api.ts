/// <reference types="vite/client" />

const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch movies");
    return response.json();
  });
};

export const getMovieDetails = (id: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch movie details");
    return response.json();
  });
};

export const getMovieImages = (id: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch movie images");
    return response.json();
  });
};