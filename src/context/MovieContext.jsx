import { createContext, useContext, useState } from "react";

const OMDB_API_KEY = "ee7e695a";
const API_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await fetch(
      `${API_URL}?s=${encodeURIComponent(query)}${
        type ? `&type=${type}` : ""
      }&page=${page}&apikey=${OMDB_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}?i=${id}&apikey=${OMDB_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const loadMovies = async () => {
    if (!query.trim()) return; // don't search empty
    try {
      const data = await fetchMovies(query, page, type);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch {
      alert("Error fetching movies!");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        query,
        setQuery,
        page,
        setPage,
        totalResults,
        setTotalResults,
        type,
        setType,
        hasSearched,
        setHasSearched,
        loadMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
