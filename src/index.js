import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Redirect, BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import homePage from './pages/Home';
import loginPage from './pages/Login';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './App.css';

const App = () => (
  <Router>
    <Provider store={store}>
      <div className='App'>
        <Route exact={true} path='/homePage' component={homePage} />
        <Route exact={true} path='/loginPage' component={loginPage} />
        <Route exact path="/" render={() => (
            (2+4 === 4) ? (
              <Redirect to="/homePage" />
            ) : (
              <loginPage />
              )
          )} />
      </div>
    </Provider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
