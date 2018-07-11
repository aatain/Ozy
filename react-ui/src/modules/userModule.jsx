import axios from "axios";
import history from '../history'

//reducer
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_USER':
            console.log('Checking if User is in database...please wait')
            return { ...state, checkingIfUserExists: true };
        case 'USER_FOUND':
            return { ...state, checkingIfUserExists: false, LoggedIn: true, ...action.res};
        default:
            return state;
    }
}

// actions

export const REQUEST_USER = 'REQUEST_USER';
export const requestUser = () => {
    return { type: REQUEST_USER }
}

export const submitLoginInfo = (userInfo) => async dispatch => {
    dispatch(requestUser(userInfo));
    console.log('userINFOOOO', userInfo)
    //   const res = await axios.get(`/api/search?${address}`)
    let res = {};
    res.data = { ...userInfo }
    if (res.data) {
        console.log(res.data, 'CHECKKKK MEEEE')
        dispatch({ type: 'events.fetchSuccess', res });
        // history.push('/');
    }
    if (res.data.error) {
        dispatch({ type: 'events.fetchError', error: res.error });
    }
}

export {
    userReducer
}; 