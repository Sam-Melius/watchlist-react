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

  function onList(api_id) {
    const match = watchlist.find(item => Number(item.api_id) === Number(api_id));
    return Boolean(match);
  }
  

  return (
    <div>SearchPage
      <form onSubmit={handleSearch}>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
      <section>Results:
        <MovieList movies={results} onList={onList} refreshList={refreshList} />
      </section>
    </div>
  );
}
