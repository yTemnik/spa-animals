/* eslint-disable react-hooks/exhaustive-deps */
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
      token={props.token}
      isAuth={props.isAuth}
      animalsPage={props.animalsPage}
      setModalActive={props.setModalActive}
      setCheckElem={props.setCheckElem}
    />
  );
};

export default AnimalsContainer;
