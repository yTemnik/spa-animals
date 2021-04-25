/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodayTC } from '../../../redux/today-reducer';
import Today from './Today';

const TodayContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTodayTC());
	}, []);

	return (
		<Today
      token={props.token}
			isAuth={props.isAuth}
			todayPage={props.todayPage}
			setModalActive={props.setModalActive}
			setCheckElem={props.setCheckElem}
		/>
	);
};

export default TodayContainer;
