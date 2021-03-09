import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import Preloader from '../common/Preloader/Preloader';
import Animals from './Animals/Animals';
import Today from './Today/Today';
import { requestTodayInfo } from '../../redux/today-reducer';

const ContentContaner = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestTodayInfo());
    }, [])


	return (
		<div>
			<Switch>
				<Route path="/today" render={() => <Today />} />
				<Route path="/animals" render={()=> <Animals />} />
			</Switch>
		</div>
	);
};

export default ContentContaner;
