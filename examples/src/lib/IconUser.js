import React from 'react';
import PropTypes from 'prop-types';

const IconUser = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconUser</title>
    <path d="M27.32,24.45H12.68A8.71,8.71,0,0,0,4,33.15v2.14H5.39V33.15a7.3,7.3,0,0,1,7.29-7.29H27.32a7.3,7.3,0,0,1,7.29,7.29v2.14H36V33.15A8.71,8.71,0,0,0,27.32,24.45Z" />
    <path d="M20,22a8.71,8.71,0,1,0-8.71-8.71A8.72,8.72,0,0,0,20,22ZM20,6a7.3,7.3,0,1,1-7.29,7.29A7.3,7.3,0,0,1,20,6Z" />
  </svg>
)

IconUser.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconUser.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconUser;