import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoviesList from './containers/MoviesList';
import ActorsList from './containers/ActorsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={MoviesList} />
        <Route path='/movies' component={MoviesList} />
        <Route path='/actors' component={ActorsList} />
      </Router>
    </div>
  );
}

export default App;
