import axios from "axios";
import history from '../history'

//reducer
const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_EVENTS':
      console.log('currentlyFetchingByLocation...please wait')
      return { ...state, requestingEventsByLocation: true };

    case 'FETCH_EVENTS_SUCCESS':
      console.log('FetchingByLocation...SUCCESSFULLLLL!')
      return { ...state, requestingEventsByLocation: false, ...action.res.data };

    case 'FETCH_EVENTS_ERROR':
      return { ...state, requestingEventsByLocation: false, ...action.error };

    default:
      return state;
  }
}

// actions
export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const requestEvents = (location) => {
  return { type: REQUEST_EVENTS }
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const receiveEvents = (location, json) => {
  return {
    type: RECEIVE_EVENTS,
    location,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
export const fetchEventsByLatLng = (address) => async dispatch => {
  dispatch(requestEvents(address));
  const res = await axios.get(`/api/search?${address}`)
  if (res.data.data) {
    dispatch({ type: FETCH_EVENTS_SUCCESS, res: res.data});
    history.push('/results');
  }
  if (res.data.error) {
    dispatch({ type: FETCH_EVENTS_ERROR, error: res.error });
  }
}

//for refresh
export const INVALIDATE_EVENTS = 'INVALIDATE_EVENTS'
export function invalidateEvents(location) {
  return {
    type: INVALIDATE_EVENTS,
    location
  }
}

export {
  eventReducer
}; 