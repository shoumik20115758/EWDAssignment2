/// <reference types="vite/client" />

const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const getMovies = () => {
  console.log("API KEY:", API_KEY);

  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => {
    console.log("TMDB response status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return response.json();
  });
};