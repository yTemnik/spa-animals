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
				if (response.status === 200) {
					console.log(response.data.results);
				}
			});
	},
};

export const animalsAPI = {};
