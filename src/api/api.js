import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://acits-api.herokuapp.com',
});

export const authAPI = {
	login(login, password) {
		return instance
			.post(`/api/token/`, {
				'Content-Type': 'application/json',
				username: login,
				password: password,
				/* 				username: 'test_user_1',
				password: 'user10000', */
			})
			.then((response) => {
				return response;
			})
			.catch(err => {
			    return err;
			});
	},
};

export const todayAPI = {
	getTodayInfo(token) {
		return instance
			.get(`/api/v1/prescriptions/today/`, {
				headers: {
					Authorization: `Bearer ${token}`,
					'current-shelter': 1,
				},
			})
			.then((response) => {
				return response;
			});
	},
};

export const animalsAPI = {
	getAnimalsInfo(token) {
		return instance
			.get(`https://acits-api.herokuapp.com/api/v1/animals/`, {
				headers: {
					Authorization: `Bearer ${token}`,
					'current-shelter': 1,
				},
			})
			.then((response) => {
				return response;
			});
	},
};

