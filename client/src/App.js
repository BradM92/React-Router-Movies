import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Link to ="/">HOME</Link>
        <Link to = "/movies/2">MOVIE</Link>
        <Route path = {'/movies/:id'}>
          <Movie saved={saved} set={setSaved} add ={addToSavedList} />
          </Route>

          <Route exact path="/">
            <MovieList movies={movieList}/>
          </Route>

        
      </div>
    </div>
  );
}