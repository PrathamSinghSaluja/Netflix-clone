import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Movie from './Movie';

function App(props) {

  const movie = `${props.cinema}`;
  console.log(movie);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/Movie/'>
           
            <Movie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

