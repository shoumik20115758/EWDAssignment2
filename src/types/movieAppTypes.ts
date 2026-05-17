// src/types/tmdb.ts

import { paths } from "./generated/tmdb";

export type DiscoverMoviesProps =
  paths["/3/discover/movie"]["get"]["responses"][200]["content"]["application/json"];

export type DiscoverMovieOverviewProps =
  NonNullable<DiscoverMoviesProps["results"]>[number];

export type BaseMovieListProps = {
  movies: NonNullable<DiscoverMoviesProps["results"]>;
  onMovieSelect?: (id: number) => void;
};

export type MovieCardProps = DiscoverMovieOverviewProps & {
  onMovieSelect?: (id: number) => void;
};

export type MovieDetailsProps =
  paths["/3/movie/{movie_id}"]["get"]["responses"][200]["content"]["application/json"];

export type MovieImage = {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
};

export type MoviePageProps = {
  movie: MovieDetailsProps;
  images: MovieImage[];
};