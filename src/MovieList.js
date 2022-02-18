import React from 'react';
import { useLocation } from 'react-router';
import Movie from './Movie';
import WatchListItem from './WatchListItem';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>MovieList
      {
        movies.map((movie, i) => location.pathname.includes('search')
          ? <Movie key={movie.title + i} movie={movie} />
          : <WatchListItem />)
      }
    </div>
  );
}
