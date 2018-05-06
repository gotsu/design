import React from 'react';
import PropTypes from 'prop-types';

const IconHome = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconHome</title>
    <path d="M21.42,4.71a2.08,2.08,0,0,0-2.84,0l-14,12.83A1.73,1.73,0,0,0,4,18.8V36H16.71V26.17a3.42,3.42,0,0,1,3-3.45A3.28,3.28,0,0,1,23.29,26V36H36V18.8a1.73,1.73,0,0,0-.55-1.26ZM34.56,34.58H24.71V26a4.72,4.72,0,0,0-5.17-4.68,4.83,4.83,0,0,0-4.25,4.85v8.41H5.44V18.8a.32.32,0,0,1,.1-.22l14-12.83a.68.68,0,0,1,.94,0l14,12.83a.32.32,0,0,1,.1.22Z" />
  </svg>
)

IconHome.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconHome.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconHome;