import React from 'react';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <img key={index} src={movie.Poster} alt={movie.Title} />
      ))}
    </div>
  );
};

export default MovieList;
