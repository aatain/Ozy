import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {eventReducer} from './modules/getEvents.jsx';

const rootReducer = combineReducers({
  eventReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export default store;