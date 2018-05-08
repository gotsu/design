import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Header = () => (
  <div className={cx('Header')}>
    <NavLink className={cx('title')} to="/icons">React Gotsu Icons</NavLink>
    <ul>
      <li>
        <NavLink to="/icons" activeClassName={cx('active')}>Icons</NavLink>
      </li>
      <li>
        <NavLink activeClassName={cx('active')} to="/icons/docs">Docs</NavLink>
      </li>
      <li>
        <NavLink activeClassName={cx('active')} to="/icons/tutorial">Tutorial</NavLink>
      </li>
    </ul>
  </div>
);


export default Header;