import { paths } from "./generated/tmdb";

export type DiscoverMoviesProps =
  paths["/3/discover/movie"]["get"]["responses"][200]["content"]["application/json"];

export type DiscoverMovieOverviewProps =
  NonNullable<DiscoverMoviesProps["results"]>[number];

export type BaseMovieListProps = {
  movies: NonNullable<DiscoverMoviesProps["results"]>;
  title?: string;
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

export type Actor = {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
  popularity: number;
};

export type ActorDetails = {
  id: number;
  name: string;
  biography: string;
  birthday: string | null;
  place_of_birth: string | null;
  profile_path: string | null;
  known_for_department: string;
  popularity: number;
};

export type MovieCastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};