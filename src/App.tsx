import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}


function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  

	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    try {
      const url = `http://www.omdbapi.com/?s=guard&apikey=${import.meta.env.VITE_API_KEY}`;
  
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseJson = await response.json();
      setMovies(responseJson.Search || []);
      console.log(responseJson.Search, "testn.nsssd::::))(({}>>")
      setLoading(false);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);


  return (
    <>
   <div className='container-fluid movie-app'>
        <div className='row'>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && movies && <MovieList movies={movies} />}
        </div>
      </div>
    </>
  )
}

export default App
