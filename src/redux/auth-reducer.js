import { authAPI, todayAPI } from '../api/api';

const UPDATE_AUTH_DATA = 'UPDATE_AUTH_DATA';

let initialState = {
	login: null,
	password: null,
	isAuth: false
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

export const loginTC = (login, password) => {
	return (dispatch) => {
		authAPI.login(login, password).then((response) => {
			if (response.status === 200) {
				const token = JSON.stringify(response.data.access);
				localStorage.setItem('token', token.replace(/\"/g, ''));
				todayAPI.getTodayInfo(token.replace(/\"/g, ''));
				dispatch(updateAuthData(login, password, true));
			} else {
				console.log('ошибка');
			}
		});
	};
};

export default authReducer;
