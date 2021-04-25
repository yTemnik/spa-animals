import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const handleClick = () => {
    localStorage.removeItem('token');
  };

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
        <li className={s.logOut}>
          <Link to="/auth">
            <button className={s.btn} onClick={handleClick}>
              Выйти
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
