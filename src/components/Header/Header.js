import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Header = () => (
  <div className={cx('Header')}>
    <NavLink className={cx('title')} to="/">React Gotsu Icons</NavLink>
    <ul>
      <li>
        <NavLink activeClassName={cx('active')} to="/icons">Icons</NavLink>
      </li>
      <li>
        <NavLink activeClassName={cx('active')} to="/docs">Docs</NavLink>
      </li>
      <li>
      <NavLink activeClassName={cx('active')} to="/tutorial">Tutorial</NavLink>
      </li>
    </ul>
  </div>
);


export default Header;