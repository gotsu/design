import React from 'react';
import PropTypes from 'prop-types';

const IconPicture = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconPicture</title>
    <path d="M5.71,5.71V34.29H34.29V5.71ZM32.88,7.12V20.06L30,17.2a2.91,2.91,0,0,0-4.13,0l-6.23,6.23a1.5,1.5,0,0,1-2.13,0L15,20.87a2.9,2.9,0,0,0-4.12,0L7.12,24.6V7.12ZM7.12,32.88V26.6l4.73-4.73a1.54,1.54,0,0,1,2.13,0l2.56,2.56a2.93,2.93,0,0,0,4.12,0l6.23-6.23a1.54,1.54,0,0,1,2.13,0l3.86,3.86V32.88Z" />
    <path d="M17.69,17.28a3.64,3.64,0,1,0-3.63-3.63A3.64,3.64,0,0,0,17.69,17.28Zm0-5.86a2.23,2.23,0,1,1-2.22,2.23A2.23,2.23,0,0,1,17.69,11.42Z" />
  </svg>
)

IconPicture.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconPicture.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconPicture;