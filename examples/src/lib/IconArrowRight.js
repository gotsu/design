import React from 'react';
import PropTypes from 'prop-types';

const IconArrowRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconArrowRight</title>
    <rect transform="translate(40 0) rotate(90)" />
    <path d="M7.48,20.71H29a1.57,1.57,0,0,1-.17.21L19.05,30.7l1,1,9.78-9.78a2.7,2.7,0,0,0,0-3.82L20.05,8.31l-1,1,9.78,9.78a1.57,1.57,0,0,1,.17.21H7.48Z" />
  </svg>
)

IconArrowRight.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconArrowRight.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconArrowRight;