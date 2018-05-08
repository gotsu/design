import React from 'react';
import PropTypes from 'prop-types';

const IconCross = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconCross</title>
    <polygon points="20.7 6 19.29 6 19.29 19.3 6 19.3 6 20.71 19.29 20.71 19.29 34 20.7 34 20.7 20.71 34 20.71 34 19.3 20.7 19.3 20.7 6" />
  </svg>
)

IconCross.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconCross.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconCross;