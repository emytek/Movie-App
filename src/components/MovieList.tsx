import React from 'react';


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

const MovieList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
