import api from '../utils/api.js';

//reducer
export default function reducer(state={}, action) {
  switch (action.type) {
    case 'location.events.fetchingByLocation': 
      return {...state, fetchingByLocation: true};

    case 'location.events.fetchSuccess':
      return {...state, fetchingByLocation: false, ...action.res};

    case 'location.events.clear':
      return {...state, fetchingByLocation: false, collection: []};

    default: 
      return state;
  }
}

// actions
export function fetchingByLocation(location) {
  return (dispatch) => {
    dispatch({type: 'location.events.fetchingByLocation'});
    api
      .get(`/${location}/events`)
      .then(res => {
        dispatch({type: 'location.events.fetchSuccess', res});
      })
      .catch(err => {
        dispatch({type: 'location.events.fetchError', err});
      })
    ;
  };
}

export function clear() {
  return {
    type: 'location.events.clear'
  };
}
