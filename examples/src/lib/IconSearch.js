import React from 'react';
import PropTypes from 'prop-types';

const IconSearch = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconSearch</title>
    <path d="M30.71,17.35a13.43,13.43,0,1,0-4.44,9.91L35,36l1-1-8.7-8.69A13.26,13.26,0,0,0,30.71,17.35ZM17.35,29.29A11.94,11.94,0,1,1,29.29,17.35,11.95,11.95,0,0,1,17.35,29.29Z" /></svg>
)

IconSearch.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconSearch.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconSearch;