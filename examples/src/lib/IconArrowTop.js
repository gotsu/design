import React from 'react';
import PropTypes from 'prop-types';

const IconArrowTop = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconArrowTop</title>
    <path d="M18.09,10.17,8.31,20l1,1,9.78-9.78a1.57,1.57,0,0,1,.21-.17V32.52h1.42V11a1.57,1.57,0,0,1,.21.17L30.7,21l1-1-9.78-9.78A2.77,2.77,0,0,0,18.09,10.17Z" />
  </svg>
)

IconArrowTop.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconArrowTop.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconArrowTop;