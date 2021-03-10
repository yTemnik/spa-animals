import React from 'react';
import s from './AnimalCard.module.scss';

const AnimalCard = (props) => {
	return (
		<div className={s.card}>
			<h1>Выбранное животное</h1>
			<ul className={s.list}>
				<li>{props.checkElem.name}</li>
				{props.checkElem.spec ? <li>{props.checkElem.spec}</li> : null}
				<li>{props.checkElem.spec_name}</li>
				<li>{props.checkElem.spec_parent_name}</li>
				{props.checkElem.status ? <li>{props.checkElem.status}</li> : null}
			</ul>
		</div>
	);
};

export default AnimalCard;
