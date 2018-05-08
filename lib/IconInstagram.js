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

var IconInstagram = function IconInstagram(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconInstagram'
    ),
    _react2.default.createElement('path', { d: 'M25.11,33H14.89A7.9,7.9,0,0,1,7,25.11V14.89A7.9,7.9,0,0,1,14.89,7H25.11A7.9,7.9,0,0,1,33,14.89V25.11A7.9,7.9,0,0,1,25.11,33ZM14.89,8.41a6.49,6.49,0,0,0-6.48,6.48V25.11a6.49,6.49,0,0,0,6.48,6.48H25.11a6.49,6.49,0,0,0,6.48-6.48V14.89a6.49,6.49,0,0,0-6.48-6.48Z' }),
    _react2.default.createElement('path', { d: 'M20,26.76A6.76,6.76,0,1,1,26.76,20,6.76,6.76,0,0,1,20,26.76Zm0-12.11A5.35,5.35,0,1,0,25.35,20,5.36,5.36,0,0,0,20,14.65Z' }),
    _react2.default.createElement('circle', { cx: '27.15', cy: '12.86', r: '1.27' })
  );
};

IconInstagram.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconInstagram.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconInstagram;