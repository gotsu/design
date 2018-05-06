import React, { Component } from 'react';

import styles from './Sidebar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class Sidebar extends Component {
  render() {
    return (
      <aside className={cx('Sidebar')}>
        Sidebar
      </aside>
    );
  }
}


export default Sidebar;