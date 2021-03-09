/* import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://acits-api.herokuapp.com',
	headers: {
		'Content-Type': 'application/json',
		Authorization:
			'Bearer ' +
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1MzAwMDk3LCJqdGkiOiJlZDI2MGIxMzk1N2Q0NzI2YWNlZmZiMzRlMzJkMDJkNCIsInVzZXJfaWQiOjJ9.6W0Oqs4O1zVpZRiVKYfEqS5TEmFXuFNnzHAd9o3ZWxk',
		'current-shelter': 1,
	},
});

export const todayAPI = {
	getTodayInfo() {
		return instance
			.post(`/api/token/`, {'Content-Type': 'application/json', username: 'test_user_1', password: 'user10000'})
			.then((response) => {
				return response;
			});
	},
}; */

export const todayAPI = {
	getTodayInfo() {
		return fetch('https://acits-api.herokuapp.com/api/token/', {
            headers: {
				'Content-Type': 'application/json',
				/* 				Authorization:
					'Bearer ' +
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1MzAwMDk3LCJqdGkiOiJlZDI2MGIxMzk1N2Q0NzI2YWNlZmZiMzRlMzJkMDJkNCIsInVzZXJfaWQiOjJ9.6W0Oqs4O1zVpZRiVKYfEqS5TEmFXuFNnzHAd9o3ZWxk',
				'current-shelter': 1, */
			},
			body: {
				username: 'test_user_1',
				password: 'user10000',
			},
			method: 'POST',
		}).then((response) => {
			return response;
		});
	},
};

export const animalsAPI = {};
