import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import { Card } from "react-bootstrap";

interface MovieDetailsProps {
  imdbID: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState<Movie[]>([]);
  const { imdbID: paramImdbID } = useParams<{ imdbID: string }>();
  const { selectedMovieID } = useMovieContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log("Selected Movie ID:", selectedMovieID);
  console.log(imdbID, "Movie ID");
  console.log(import.meta.env.VITE_API_KEY, "ENV KEY");

  //   useEffect(() => {
  //     const fetchMovieDetails = async () => {
  //       try {
  //         console.log("Selected Movie ID:", selectedMovieID);

  //         const response = await fetch(
  //           `http://www.omdbapi.com/?i=${selectedMovieID}&apikey=${
  //             import.meta.env.VITE_API_KEY
  //           }`
  //         );

  //         if (!response.ok) {
  //           throw new Error(
  //             `Failed to fetch movie details. Status: ${response.status}`
  //           );
  //         }

  //         const data = await response.json();
  //         console.log("Data Response:", data);

  //         if (data.Response === "False") {
  //           throw new Error(`API error: ${data.Error}`);
  //         }

  //         setMovieDetails(data);
  //       } catch (error) {
  //         console.error("Error fetching movie details:", error);
  //       }
  //     };

  //     // Fetch movie details only if selectedMovieID is different from the current movieDetails imdbID
  //     if (selectedMovieID && selectedMovieID !== paramImdbID) {
  //       fetchMovieDetails();
  //     }
  //   }, [selectedMovieID, paramImdbID]);

  //   if (!movieDetails) {
  //     return <div>Loading...</div>;
  //   }
  const getMovieDetails = async (selectedMovieID: string) => {
    try {
      const url = `http://www.omdbapi.com/?i=${selectedMovieID}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseJson = await response.json();
      if (responseJson) {
        setMovieDetails(responseJson);
      }
      console.log(responseJson, "FROM DETAILS:*${}>>");
      setLoading(false);
    } catch (error: any) {
      setError(error.message || "An error occurred");
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails(selectedMovieID);
  }, [selectedMovieID]);

  return (
    <div className="container-detail mt-4 movie-details">
      <div className="row-detail">
        <div className="col-md-4 poster-container">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="img-fluid poster"
          />
        </div>

        <Card>
          <Card.Body>
            <div className="col-md-8 details-container">
              <h2>{movieDetails.Title}</h2>
              <p>Year: {movieDetails.Year}</p>
              <p>Rated: {movieDetails.Rated}</p>
              <p>Released: {movieDetails.Released}</p>
              <p>Runtime: {movieDetails.Runtime}</p>
              <p>Genre: {movieDetails.Genre}</p>
              <p>Director: {movieDetails.Director}</p>
              <p>Writer: {movieDetails.Writer}</p>
              <p>Actors: {movieDetails.Actors}</p>
              <p>Plot: {movieDetails.Plot}</p>
              <p>Language: {movieDetails.Language}</p>
              <p>Country: {movieDetails.Country}</p>
              <p>IMDb Rating: {movieDetails.imdbRating}</p>
              <p>IMDb Votes: {movieDetails.imdbVotes}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MovieDetails;
