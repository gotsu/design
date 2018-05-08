import React from 'react';
import PropTypes from 'prop-types';

const IconX = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconX</title>
    <polygon points="31.5 7.5 20 19 8.5 7.5 7.5 8.5 19 20 7.5 31.5 8.5 32.5 20 21 31.5 32.5 32.5 31.5 21 20 32.5 8.5 31.5 7.5" />
  </svg>
)

IconX.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconX.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconX;