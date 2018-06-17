import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import getEvents from './modules/getEvents.jsx';
// import locationEvents from 'modules/locations/Events';

const rootReducer = combineReducers({
  getEvents,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;