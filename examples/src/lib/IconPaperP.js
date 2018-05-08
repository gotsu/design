import React from 'react';
import PropTypes from 'prop-types';

const IconPaperP = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconPaperP</title>
    <path d="M7.37,7.56V32.44a2.72,2.72,0,0,0,2.71,2.71H23.85l8.78-8.78V4.85H10.08A2.72,2.72,0,0,0,7.37,7.56ZM24.26,32.74v-6h6Zm7-7.37H22.85v8.37H10.08a1.3,1.3,0,0,1-1.3-1.3V7.56a1.3,1.3,0,0,1,1.3-1.3H31.22Z" />
    <path d="M18.13,20.64l2.91,0a3.69,3.69,0,0,0,0-7.37H16.72v11h1.41Zm0-6H21a2.27,2.27,0,0,1,0,4.54l-2.9,0Z" />
  </svg>
)

IconPaperP.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconPaperP.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconPaperP;