import React from 'react';
import {Redirect, BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Results from './pages/Results';
import './App.css';

const App = () => (
  <Router>
      <div className='App'>
        <Route exact={true} path='/home' component={Home} />
        <Route exact={true} path='/login' component={Login} />
        <Route exact={true} path='/results' component={Results} />
        <Route exact path="/" render={() => (
            (2+4 === 4) ? (
              <Redirect to="/home" />
            ) : (
              <Login />
              )
          )} />
      </div>
  </Router>
)

export default App;
