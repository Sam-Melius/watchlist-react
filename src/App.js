import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { logout } from './services/fetch-utils';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import WatchList from './WatchList';


export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

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
                <button onClick={logout}>Logout</button>
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


