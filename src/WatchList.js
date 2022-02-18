import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import MovieList from './MovieList';
import { getWatchList } from './services/fetch-utils';

export default function WatchList() {
  const [movies, setMovies] = useState([]);

  async function refreshList() {
    const myList = await getWatchList();
    setMovies(myList);
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>WatchList
      <MovieList movies={movies} refreshList={refreshList} />
    </div>
  );
}
