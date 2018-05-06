import React from 'react';
import PropTypes from 'prop-types';

const IconChat = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconChat</title>
    <path d="M4,28.71H27l5.42,5.42a2.06,2.06,0,0,0,1.47.62,2.14,2.14,0,0,0,.82-.16,2.09,2.09,0,0,0,1.3-2V7.29H4Zm1.41-20H34.59V32.64a.68.68,0,0,1-.43.64.66.66,0,0,1-.75-.15L27.57,27.3H5.41Z" />
    <rect x="13.29" y="16" width="1.41" height="4" />
    <rect x="19.29" y="16" width="1.41" height="4" />
    <rect x="25.29" y="16" width="1.41" height="4" />
  </svg>
)

IconChat.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconChat.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconChat;