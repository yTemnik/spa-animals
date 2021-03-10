import { todayAPI } from '../api/api';

const SET_TODAY_INFO = 'SET_TODAY_INFO';

let initialState = {
	todayInfo: [],
	loading: false,
};

const todayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODAY_INFO: {
			return { ...state, todayInfo: action.todayInfo, loading : true };
		}
		default:
			return state;
	}
};

export const setTodayInfo = (todayInfo) => ({
	type: SET_TODAY_INFO,
	todayInfo,
});

export const setTodayTC = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		todayAPI.getTodayInfo(token).then((response) => {
			if (response.status === 200) {
				dispatch(setTodayInfo(response.data.results));
			}
		});
	};
};

export default todayReducer;
