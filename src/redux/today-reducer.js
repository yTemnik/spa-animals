
import { dispatch } from 'redux';
import { authAPI } from '../api/api';

const SET_TODAY_INFO = 'SET_TODAY_INFO';

let initialState = {
	todayInfo: [],
	loading: false,
};

const todayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODAY_INFO: {
			return { ...state};
		}
		default:
			return state;
	}
};

export const setTodayInfo = () => ({
	type: SET_TODAY_INFO,
});



export default todayReducer;
