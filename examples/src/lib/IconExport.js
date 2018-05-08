import React from 'react';
import PropTypes from 'prop-types';

const IconExport = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconExport</title>
    <polygon points="32.71 15.29 24 15.29 24 16.7 31.29 16.7 31.29 31.3 8.71 31.3 8.71 16.7 16 16.7 16 15.29 7.29 15.29 7.29 32.71 32.71 32.71 32.71 15.29" />
    <polygon points="20.7 26 20.7 6.41 25.15 10.86 26.15 9.86 20 3.71 13.84 9.86 14.84 10.86 19.29 6.41 19.29 26 20.7 26" />
  </svg>
)

IconExport.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconExport.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconExport;