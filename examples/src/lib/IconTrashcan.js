import React from 'react';
import PropTypes from 'prop-types';

const IconTrashcan = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconTrashcan</title>
    <path d="M25.7,7A1.72,1.72,0,0,0,24,5.29H16A1.72,1.72,0,0,0,14.3,7V9.29H6v1.42H9.29v24H30.71v-24H34.1V9.29H25.7Zm-10,0a.29.29,0,0,1,.3-.29h8a.29.29,0,0,1,.3.29V9.29H15.71ZM29.29,33.29H10.71V10.71H29.29Z" />
    <rect x="16.29" y="17.12" width="1.41" height="9.78" />
    <rect x="22.29" y="17.12" width="1.41" height="9.78" />
  </svg>
)

IconTrashcan.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconTrashcan.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconTrashcan;