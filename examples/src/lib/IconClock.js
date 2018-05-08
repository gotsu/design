import React from 'react';
import PropTypes from 'prop-types';

const IconClock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconClock</title>
    <path d="M20,4A16,16,0,1,0,36,20,16,16,0,0,0,20,4Zm0,30.53A14.56,14.56,0,1,1,34.56,20,14.57,14.57,0,0,1,20,34.56Z" />
    <polygon points="19.36 12.38 17.95 12.38 17.95 21.32 25.51 26.35 26.29 25.18 19.36 20.56 19.36 12.38" />
  </svg>
)

IconClock.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconClock.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconClock;