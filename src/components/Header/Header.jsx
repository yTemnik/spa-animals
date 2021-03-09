import React from 'react';
import s from './Header.module.scss'

const Header = () => {
	return (
        <header>
			<ul className={s.list}>
				<li>
					<a href="/today" className={s.link} >
						Сегодня
					</a>
				</li>
				<li>
					<a href="/animals" className={s.link}>
						Животные
					</a>
				</li>
			</ul>
        </header>
	);
};

export default Header;
