import axios from "axios";
import history from '../history'

//reducer
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      console.log('Checking if User is in database...please wait')
      return { ...state, checkingIfUserExists: true };
    default:
      return state;
  }
}

// actions

export const CHECK_USER_EMAIL = 'CHECK_USER_EMAIL';
export const checkUserEmail = () => {
  return { type: CHECK_USER_EMAIL }
}

export const submitSignInEmail = (userInfo) => async dispatch => {
  dispatch(checkUserEmail(userInfo));
  console.log('userINFOOOO', userInfo)
//   const res = await axios.get(`/api/search?${address}`)
//   if (res.data.data) {
//     console.log(res.data, 'CHECKKKK MEEEE')
//     dispatch({ type: 'events.fetchSuccess', res: res.data});
//     history.push('/results');
//   }
//   if (res.data.error) {
//     dispatch({ type: 'events.fetchError', error: res.error });
//   }
}

export {
  userReducer
}; 