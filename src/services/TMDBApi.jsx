import axios from "axios";
export const prefix = "https://image.tmdb.org/t/p/w400/";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

//unique key generated from TMDB
const apiKey = "6172f71c72239086a9f623722c6ca539";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return {
    results: response.data,
  };
};

//getting endpoints about a specific movie
export const getMovie = async (id) => {
  return get(`/movie/${id}?api_key=${apiKey}&language=en-US`);
};

//endpoint about now playing movies
export const getLatestMovies = async () => {
  return get(`/movie/now_playing?api_key=${apiKey}`);
};

//endpoint about related movies
export const getTopRatedMovies = async () => {
  return get(`/movie/top_rated?api_key=${apiKey}&language=en-US`);
};
//endpoint about popular movies
export const getPopularMovies = async () => {
  return get(`/movie/popular?api_key=${apiKey}&language=en-US`);
};

//endpoint about genre
export const getGenre = async (id, page) => {
  return get(
    `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=${id}`
  );
}; //changes with descending order.

//endpoint about actors in a movie
export const getActors = async (id) => {
  return get(`/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
};

//endpoint about a specific actor
export const getActor = async (id) => {
  return get(
    `/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`
  );
};

//endpoint about all genresmovies
export const getAllGenres = async () => {
  return get(`/genre/movie/list?api_key=${apiKey}&language=en-US`);
};

// eslint-disable-next-line
export default {
  getMovie,
  getLatestMovies,
  getTopRatedMovies,
  getPopularMovies,
  getGenre,
  getActors,
  getActor,
  getAllGenres,
};
