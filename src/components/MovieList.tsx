import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MoviesListProps {
  movies: Movie[];
}

const MovieList: React.FC<MoviesListProps> = (props) => {
  const { selectedMovieID, setMovieID } = useMovieContext();
  const FavouriteComponent = props.favouriteComponent;
  const navigate = useNavigate();

  const handlePosterClick = (movie: Movie) => {
    setMovieID(movie.imdbID);
    // Navigate to the movie details route with the imdbID parameter
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className="movie-list-container">
      {props.movies.map((movie, index) => (
        <>
          <div key={index} className="image-container movie-card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => handlePosterClick(movie)}
            />
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MovieList;
