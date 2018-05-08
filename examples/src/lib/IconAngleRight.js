import React from 'react';
import PropTypes from 'prop-types';

const IconAngleRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconAngleRight</title>
    <path d="M13.65,33.39l1,1L27.12,21.91a2.7,2.7,0,0,0,0-3.82L14.7,5.67l-1,1L26.12,19.08a1.3,1.3,0,0,1,0,1.84Z" />
  </svg>
)

IconAngleRight.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconAngleRight.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconAngleRight;