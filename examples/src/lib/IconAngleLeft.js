import React from 'react';
import PropTypes from 'prop-types';

const IconAngleLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconAngleLeft</title>
    <path d="M26.35,6.61l-1-1L12.88,18.09a2.7,2.7,0,0,0,0,3.82L25.3,34.33l1-1L13.88,20.92a1.3,1.3,0,0,1,0-1.84Z" />
  </svg>
)

IconAngleLeft.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconAngleLeft.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconAngleLeft;