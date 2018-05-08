import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactLogo from 'Logo.svg';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Header = () => (
  <div className={cx('Header')}>
    {/* <ReactLogo /> */}
    <img src={ReactLogo} alt="img" style={{ width: '60px', lineHeight: '60px', height: '60px', marginLeft: '2rem' }} />
    <NavLink className={cx('title')} to="/icons">React Gotsu Icons</NavLink>
    <ul>
      <li>
        <NavLink exact to="/icons" activeClassName={cx('active')}>Icons</NavLink>
      </li>
      <li>
        <NavLink activeClassName={cx('active')} exact to="/icons/docs">Docs</NavLink>
      </li>
      <li>
        <NavLink activeClassName={cx('active')} to="/icons/tutorial">Tutorial</NavLink>
      </li>
    </ul>
    <a href="https://github.com/gotsu/icons/" target="_blank" rel="noopener noreferrer" className={cx('hreflink')} >GitHub </a>
  </div>
);


export default Header;