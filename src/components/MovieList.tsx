import React from "react";

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
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="movie-list-container">
      {props.movies.map((movie, index) => (
        <>
          <div key={index} className="image-container movie-card">
            <img src={movie.Poster} alt={movie.Title} />
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
