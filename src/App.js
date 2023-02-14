import React from 'react';
import { CommonApi } from './services/Common-Api';
import MoviesList from './components/MoviesList';
import './App.css';


function App() {
  function fetchMovieHandler() {
    
    // axios.get('https://swapi.dev/api/films/').then(response => {
    //   console.log('res', response)
    // })
  }
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={[]} />
      </section>
    </React.Fragment>
  );
}

export default App;
