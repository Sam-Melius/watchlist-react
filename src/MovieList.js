import React from 'react';
import { useLocation } from 'react-router';
import Movie from './Movie';
import WatchListItem from './WatchListItem';

export default function MovieList({ movies, refreshList }) {
  const location = useLocation();
  return (
    <div className='list'>
      {
        movies.map((movie, i) => location.pathname.includes('search')
          ? <Movie key={movie.title + i} movie={movie} refreshList={refreshList} />
          : <WatchListItem key={movie.title + i} movie={movie} refreshList={refreshList}/>)
      }
    </div>
  );
}
