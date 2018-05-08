import React from 'react';
import PropTypes from 'prop-types';

const IconArrowBottom = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconArrowBottom</title>
    <rect transform="translate(40 40) rotate(180)" />
    <path d="M20.92,28.83a1.57,1.57,0,0,1-.21.17V7.48H19.29V29a1.57,1.57,0,0,1-.21-.17L9.3,19.05l-1,1,9.78,9.78a2.7,2.7,0,0,0,3.82,0l9.78-9.78-1-1Z" />
  </svg>
)

IconArrowBottom.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconArrowBottom.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconArrowBottom;