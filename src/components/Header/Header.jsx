import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<ul className={s.list}>
				<li>
					<NavLink to={"/today"} className={s.link}>
						Сегодня
					</NavLink>
				</li>
				<li>
					<NavLink to={"/animals"} className={s.link}>
						Животные
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
