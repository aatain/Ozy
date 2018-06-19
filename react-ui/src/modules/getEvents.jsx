import api from '../utils/api.js';

//reducer
const eventReducer = (state={}, action) => {
  switch (action.type) {
    case 'events.fetchingEventsByLatLng': 
      console.log('hiiii from reducer switch')
      return {...state, fetchingByLocation: true};

    case 'events.fetchSuccess':
      return {...state, fetchingByLocation: false, ...action.res};

    case 'events.clear':
      return {...state, fetchingByLocation: false, collection: []};

    default: 
      return state;
  }
}

// actions

const eventActions = {};

const google=window.google;
let geocoder = new google.maps.Geocoder()

const geocodeAddress = address => {
    console.log('inside geocodeAddress')
    let locObj; 

    geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {
        locObj = {
          locationName: results[0].formatted_address,
          latLngArr: [results[0].geometry.location.lat(), results[0].geometry.location.lng()]
        };
        console.log('state', this.state)
        return locObj;
      }
      console.log('Location not found in database');
    });
}

eventActions.fetchEventsByLatLng = (location) => {
  console.log('inside line 22', location)
  let loc = geocodeAddress(location);
  console.log('loc', loc)
  return (dispatch) => {
    console.log('fewgeg', loc)
    dispatch({type: 'events.fetchingEventsByLatLng'});
    console.log('after dispatch', loc)

    api
      .get('/api/search?')
      .then(res => {
        console.log('res', res)
        dispatch({type: 'events.fetchSuccess', res});
      })
      .catch(err => {
        dispatch({type: 'events.fetchError', err});
      })
    ;
  };
}

export {
    eventReducer,
    eventActions
}; 