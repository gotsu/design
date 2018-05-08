import React from 'react';
import PropTypes from 'prop-types';

const IconMore = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconMore</title>
    <rect class="cls-2" x="28" y="18" width="4" height="4" />
    <rect class="cls-2" x="18" y="18" width="4" height="4" />
    <rect class="cls-2" x="8" y="18" width="4" height="4" />
  </svg>
)

IconMore.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconMore.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconMore;