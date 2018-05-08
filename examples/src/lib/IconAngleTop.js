import React from 'react';
import PropTypes from 'prop-types';

const IconAngleTop = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconAngleTop</title>
    <rect transform="translate(40 0) rotate(90)" />
    <path d="M18.09,12.88,5.67,25.3l1,1L19.08,13.88a1.34,1.34,0,0,1,1.84,0L33.39,26.35l1-1L21.91,12.88A2.77,2.77,0,0,0,18.09,12.88Z" />
  </svg>
)

IconAngleTop.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconAngleTop.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconAngleTop;