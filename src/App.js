import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import s from './App.module.scss';
import ContentContainer from './components/Content/ContentContainer';
import Header from './components/Header/Header';

function App() {

	return (
		<Provider store={store}>
			<div className={s.app}>
				<Header />
				<div className={s.content}>
					<ContentContainer />
				</div>
			</div>
		</Provider>
	);
}

export default App;
