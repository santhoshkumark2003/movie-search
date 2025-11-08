import React from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useMovieContext } from "../context/MovieContext";

const Home = () => {
  const {
    movies,
    query,
    setQuery,
    page,
    setPage,
    totalResults,
    type,
    setType,
    hasSearched,
    setHasSearched,
    loadMovies,
  } = useMovieContext();

  useEffect(() => {
    if (query.trim() !== "") {
      setHasSearched(true);
      loadMovies();
    }
  }, [query, page, type]);

  return (
    <div className=" p-6 pt-20">
      {/* 🔍 Search and Filter */}
      <div className="flex justify-center mb-4 gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-1/2"
          placeholder="Search for movies..."
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>

      {!hasSearched ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          Start by typing a movie name above 🎥
        </p>
      ) : movies.length > 0 ? (
        <>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          <Pagination
            totalResults={totalResults}
            currentPage={page}
            onPageChange={setPage}
          />
        </>
      ) : (
        <p className="text-center text-gray-600 mt-8">
          No results found for “{query}”.
        </p>
      )}
    </div>
  );
};

export default Home;
