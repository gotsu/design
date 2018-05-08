import React from 'react';
import PropTypes from 'prop-types';

const IconHamburger = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconHamburger</title>
    <rect x="6" y="7.29" width="28" height="1.41" />
    <rect x="6" y="19.29" width="28" height="1.41" />
    <rect x="6" y="31.29" width="28" height="1.41" />
  </svg>
)

IconHamburger.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconHamburger.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconHamburger;