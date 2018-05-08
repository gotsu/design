'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconFacebook = function IconFacebook(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconFacebook'
    ),
    _react2.default.createElement('path', { d: 'M25.11,7H14.89A7.9,7.9,0,0,0,7,14.89V25.11A7.9,7.9,0,0,0,14.89,33H25.11A7.9,7.9,0,0,0,33,25.11V14.89A7.9,7.9,0,0,0,25.11,7ZM19.8,31.59v-9H18V20.77H19.8V17.69A3.73,3.73,0,0,1,23.53,14H26v2.85H24.18a1.53,1.53,0,0,0-1.52,1.52v2.43h2.85l-.2,1.77H22.66v9.05Zm11.79-6.48a6.48,6.48,0,0,1-6.48,6.48h-1V24h2.5l.52-4.59h-3v-1a.11.11,0,0,1,.11-.11h3.24V12.56H23.53a5.14,5.14,0,0,0-5.14,5.13v1.67H16.58V24h1.81v7.64h-3.5a6.49,6.49,0,0,1-6.48-6.48V14.89a6.49,6.49,0,0,1,6.48-6.48H25.11a6.48,6.48,0,0,1,6.48,6.48Z' })
  );
};

IconFacebook.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconFacebook.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconFacebook;