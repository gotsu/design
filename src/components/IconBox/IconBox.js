import React, { Component } from 'react';

import styles from './IconBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class IconBox extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={cx('IconBox')}>
        {this.props.icon}
        <p className={cx('name')}>{this.props.name}</p>
      </div>
    );
  }
}


export default IconBox;