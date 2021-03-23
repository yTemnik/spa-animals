import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<ul className={s.list}>
				<li>
					<NavLink to={'/today'} activeClassName={s.isActive}>
						<span>Сегодня</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={'/animals'} activeClassName={s.isActive}>
						<span>Животные</span>
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
