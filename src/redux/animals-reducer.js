import { animalsAPI } from "../api/api";

const SET_ANIMALS_INFO = 'SET_ANIMALS_INFO';

let initialState = {
    animalsInfo : [],
    loading : false
};

const animalsReducer = (state = initialState , action) => {
    switch (action.type) {
		case SET_ANIMALS_INFO: {
			return { ...state, animalsInfo: action.animalsInfo, loading : true };
		}
		default:
			return state;
	}
}

export const setAnimalsInfo = (animalsInfo) => ({
	type: SET_ANIMALS_INFO,
	animalsInfo,
});

export const setAnimalsTC = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		animalsAPI.getAnimalsInfo(token).then((response) => {
			if (response.status === 200) {
				dispatch(setAnimalsInfo(response.data.results));
			}
		});
	};
};


export default animalsReducer;