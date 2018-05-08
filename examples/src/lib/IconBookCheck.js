import React from 'react';
import PropTypes from 'prop-types';

const IconBookCheck = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconBookCheck</title>
    <path d="M12,4.66a4.72,4.72,0,0,0-4.71,4.7V30.64A4.72,4.72,0,0,0,12,35.34H32.71V4.66Zm0,1.41H31.29V24.69H12A4.7,4.7,0,0,0,8.71,26V9.36A3.29,3.29,0,0,1,12,6.07Zm0,27.86a3.29,3.29,0,0,1-3.29-3.29V29.4A3.29,3.29,0,0,1,12,26.1H31.29v7.83Z" />
    <polygon points="25.81 12.36 24.82 11.37 18.72 17.46 15.18 13.92 14.19 14.92 18.72 19.45 25.81 12.36" />
  </svg>
)

IconBookCheck.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconBookCheck.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconBookCheck;