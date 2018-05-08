import React from 'react';
import PropTypes from 'prop-types';

const IconSiren = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <title>IconSiren</title>
    <path d="M20,10A12.72,12.72,0,0,0,7.29,22.74v12H32.71v-12A12.72,12.72,0,0,0,20,10ZM31.29,33.29H8.71V22.74a11.29,11.29,0,1,1,22.58,0Z" />
    <rect x="19.29" y="0.05" width="1.41" height="5.95" /><rect class="cls-2" x="29.13" y="7.19" width="5.95" height="1.41" transform="translate(3.82 25.01) rotate(-45)" />
    <rect x="7.19" y="4.92" width="1.41" height="5.95" transform="translate(-3.27 7.9) rotate(-45)" />
    <path d="M11.6,22.31v4.14H13V22.31a7.29,7.29,0,0,1,3.85-6.43l-.67-1.24A8.7,8.7,0,0,0,11.6,22.31Z" />
  </svg>
)

IconSiren.defaultProps = {
  width: '40px',
  fill: '#656565',
};

IconSiren.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string,
};

export default IconSiren;