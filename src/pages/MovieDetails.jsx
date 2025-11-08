import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../context/MovieContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    loadDetails();
  }, [id]);

  const loadDetails = async () => {
    const data = await fetchMovieDetails(id);
    setMovie(data);
  };

  if (!movie) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="p-6 pt-20 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster} alt={movie.Title} className="rounded w-72" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
          <p>
            <b>Year:</b> {movie.Year}
          </p>
          <p>
            <b>Genre:</b> {movie.Genre}
          </p>
          <p>
            <b>Actors:</b> {movie.Actors}
          </p>
          <p>
            <b>Plot:</b> {movie.Plot}
          </p>
          <p>
            <b>IMDB Rating:</b> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
