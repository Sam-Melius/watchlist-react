import React from 'react';
import { useState } from 'react/cjs/react.development';
import MovieList from './MovieList';

export default function WatchList() {
  const [movies, setMovies] = useState([]);

  return (
    <div>WatchList
      <MovieList movies={movies} />
    </div>
  );
}
