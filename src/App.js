import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Create from './components/Create.js';
import Detail from './components/Detail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
                render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/create"
              exact
                render={(routerProps) => <Create {...routerProps} />}
            />
            <Route
              path="/detail"
              exact
                render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
        
      </div>
    )
  }
}