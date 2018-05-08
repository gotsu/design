import React from 'react';
import PropTypes from 'prop-types';

const IconArrowLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconArrowLeft</title>
    <rect transform="translate(0 40) rotate(-90)" />
    <path d="M32.52,19.29H11a1.57,1.57,0,0,1,.17-.21L21,9.3l-1-1-9.78,9.78a2.7,2.7,0,0,0,0,3.82L20,31.69l1-1-9.78-9.78a1.57,1.57,0,0,1-.17-.21H32.52Z" />
  </svg>
)

IconArrowLeft.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconArrowLeft.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconArrowLeft;