import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchListItem({ movie, refreshList }) {

  async function handleClick() {
    await watchMovie(movie.id);
    await refreshList();
  }

  return (
    <div className='movie' onClick={handleClick}>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </p>
    </div>
  );
}
