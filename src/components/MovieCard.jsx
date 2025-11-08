import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-indigo-400 shadow-md rounded p-2">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
        alt={movie.Title}
        className="rounded mb-2 w-full h-72 object-cover"
      />
      <h2 className="font-bold text-center">{movie.Title}</h2>
      <p className="text-sm text-center text-gray-600">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="block mt-2 text-center text-blue-900 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
