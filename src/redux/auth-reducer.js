/* eslint-disable no-useless-escape */
import { authAPI} from '../api/api';

const UPDATE_AUTH_DATA = 'UPDATE_AUTH_DATA';
const SHOW_ERROR = 'SHOW_ERROR';

let initialState = {
  login: null,
  password: null,
  isAuth: false,
  error: false,
  counter : 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH_DATA: {
      return {
        ...state,
        login: action.login,
        password: action.password,
        isAuth: action.isAuth,
      };
    }
    case SHOW_ERROR: {
      return {
        ...state,
        error: true,
        counter: state.counter + 1,
      };
    }
    default:
      return state;
  }
};

export const updateAuthData = (login, password, isAuth) => ({
  type: UPDATE_AUTH_DATA,
  login,
  password,
  isAuth,
});

export const showError = () => ({
  type: SHOW_ERROR,
});

export const loginTC = (login, password) => {
  return (dispatch) => {
    authAPI.login(login, password).then((response) => {
      if (response) {
        dispatch(showError());
      }
      if (response.status === 200) {
        const token = JSON.stringify(response.data.access);
        localStorage.setItem('token', token.replace(/\"/g, ''));
        dispatch(updateAuthData(login, password, true));
      }
    });
  };
};

export default authReducer;
