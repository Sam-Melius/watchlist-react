import React from 'react';

export default function Movie({ movie }) {
  return (
    <div className='movie'>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </p>
    </div>
  );
}
