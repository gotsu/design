import React from 'react';
import PropTypes from 'prop-types';

const IconAngleBottom = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconAngleBottom</title>
    <rect transform="translate(0 40) rotate(-90)" />
    <path d="M20.92,26.12a1.3,1.3,0,0,1-1.84,0L6.61,13.65l-1,1L18.09,27.12a2.7,2.7,0,0,0,3.82,0L34.33,14.7l-1-1Z" />
  </svg>
)

IconAngleBottom.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconAngleBottom.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconAngleBottom;