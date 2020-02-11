import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateApet from './CreateApet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
          </li>
          <li>
            <Link to="/createapet">CreateApet</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <div><h1>I'm Home</h1></div>
          </Route>
          <Route path="/greeting">
            <div><h1>I'm cccccccccc</h1></div>
          </Route>
          <Route path="/createapet">

            <div className="App">
              <CreateApet />
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
