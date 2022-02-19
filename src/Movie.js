import React from 'react';
import { addToWatchList } from './services/fetch-utils';

export default function Movie({ movie, refreshList, onList }) {
  const watched = onList(movie.id);
  async function handleClick() {
    if (!watched) {
      const watchListItem = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster: movie.poster_path
      };
      await addToWatchList(watchListItem);
      await refreshList();
    }
  }

  return (
    <div className={`movie ${watched ? 'watched' : ''}`} onClick={handleClick} >
      <h1>{watched && '📽'}</h1>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </p>
    </div>
  );
}
