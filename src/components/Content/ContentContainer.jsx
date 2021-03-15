import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import Login from './../Auth/Auth';
import TodayContainer from './Today/TodayContainer';
import AnimalsContainer from './Animals/AnimailContainer';
import ModalElem from './../common/Modal/ModalElem';
import AnimalCard from './AnimalCard/AnimalCard';

const ContentContainer = () => {
	const state = useSelector((state) => state);
	const isAuth = state.authPage.isAuth;

	const [modalActive, setModalActive] = useState(false);
	const [checkElem, setCheckElem] = useState({});

	return (
		<div>
			<ModalElem modalActive={modalActive} setModalActive={setModalActive}>
				<AnimalCard checkElem={checkElem} />
			</ModalElem>

			<Switch>
				<Route
					path="/today"
					render={() => (
						<TodayContainer
							isAuth={isAuth}
							todayPage={state.todayPage}
							setModalActive={setModalActive}
							setCheckElem={setCheckElem}
						/>
					)}
				/>
				<Route
					path="/animals"
					render={() => (
						<AnimalsContainer
							isAuth={isAuth}
							animalsPage={state.animalsPage}
							setModalActive={setModalActive}
							setCheckElem={setCheckElem}
						/>
					)}
				/>
				<Route path="/" render={() => <Login />} />
			</Switch>
		</div>
	);
};

export default ContentContainer;
