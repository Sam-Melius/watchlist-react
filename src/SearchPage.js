import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { searchMovies, getWatchList } from './services/fetch-utils';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const movies = await searchMovies(search);
    setResults(movies);
  }

  async function refreshList() {
    const myList = await getWatchList();
    setWatchlist(myList);
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>SearchPage
      <form onSubmit={handleSearch}>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
      <section>Results:
        <MovieList movies={results} refreshList={refreshList} />
      </section>
    </div>
  );
}
