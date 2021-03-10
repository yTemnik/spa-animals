import react from 'react'
import { Redirect } from 'react-router';


const Today = (props) => {

	if (!props.isAuth) return <Redirect to="/" />

/* 	console.log(props); */
	return (
		<div>
			<ul>
				<li>123</li>
				<li>456</li>
				fdfgdgfdhfhfghg
			</ul>
		</div>
	);
};

export default Today;
