import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAnimalsTC } from '../../../redux/animals-reducer';
import Animals from './Animals';

const AnimalsContainer = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAnimalsTC());
	}, []);

	return (
		<Animals
			isAuth={props.isAuth}
			animalsPage={props.animalsPage}
			setModalActive={props.setModalActive}
			setCheckElem={props.setCheckElem}
/* 			onGetElem={props.onGetElem} */
		/>
	);
};

export default AnimalsContainer;
