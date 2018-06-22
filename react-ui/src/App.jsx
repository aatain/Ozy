import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './history.js'

import Header from './components/Header.jsx'
import NotFound from './components/NotFound.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Results from './pages/Results';
import './App.css';

const App = () => (
  <div className='App'>
    <Header />
    <Router history={history} >
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/results' component={Results} />
        <Route exact component={NotFound} />
        <Route exact path="/" render={() => (
          (2 + 4 === 4) ? (
            <Redirect to="/home" />
          ) : (
              <Login />
            )
        )} />
      </Switch>
    </Router>
  </div>
)

export default App;



