import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const movies = await searchMovies(search);
    setResults(movies);
  }

  return (
    <div>SearchPage
      <form onSubmit={handleSearch}>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
      <section>Results:
        <MovieList movies={results} />
      </section>
    </div>
  );
}
