import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from "react-redux"
import Preloader from '../common/Preloader/Preloader';
import Animals from './Animals/Animals';
import Today from './Today/Today';
import Login from './../Auth/Auth'


const ContentContaner = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
	const isAuth = state.authPage.isAuth;

/*     useEffect(() => {
      dispatch(loginTC());
    }, [])
 */

	return (
		<div>
			<Switch>  
				<Route path="/today" render={() => <Today isAuth={isAuth} />} />
				<Route path="/animals" render={()=> <Animals isAuth={isAuth}  />} />
				<Route path="/" render={()=> <Login />} />
			</Switch>
		</div>
	);
};


export const MemodContentContaner= React.memo(ContentContaner);
