import React from 'react';
import PropTypes from 'prop-types';

const IconBookmark2 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconBookmark2</title>
    <path d="M9.75,34.46a.9.9,0,0,0,.91,0L20,28.87l9.34,5.58h0a.84.84,0,0,0,.46.13.91.91,0,0,0,.91-.91V5.29H9.29V33.67A.91.91,0,0,0,9.75,34.46Zm1-27.75H29.29V32.78L20,27.23l-9.29,5.55Z" />
  </svg>
)

IconBookmark2.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconBookmark2.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconBookmark2;