import React from 'react';
import PropTypes from 'prop-types';

const IconAlignCenter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconAlignCenter</title>

    <rect x="9.53" y="10.82" width="20.94" height="1.41" />
    <rect x="10.49" y="22.12" width="19.03" height="1.41" />
    <rect x="12.43" y="16.47" width="15.15" height="1.41" />
    <rect x="12.43" y="27.77" width="15.15" height="1.41" />
  </svg>
)

IconAlignCenter.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconAlignCenter.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconAlignCenter;