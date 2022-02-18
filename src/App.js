import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import WatchList from './WatchList';


function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    async function fetch() {
      const user = await getUser();
      if (user) setUser(user);
    }
    fetch();
  });

  async function handleLogout() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          { user && 
            <ul>
              <li>
                <NavLink to='search'>SearchPage</NavLink>
              </li>
              <li>
                <NavLink to='/watchlist'>Watchlist</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          }
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to='/search'/>
                  : <HomePage setUser={setUser}/>
              }
            </Route>
            <Route exact path='/search'>
              {
                !user
                  ? <Redirect to='/'/>
                  : <SearchPage />
              }
            </Route>
            <Route exact path='/watchlist'>
              {
                !user
                  ? <Redirect to='/'/>
                  : <WatchList />
              }
            </Route>

          </Switch>
        </main>
      
      </div>
    </Router>
    
  );
}

export default App;
