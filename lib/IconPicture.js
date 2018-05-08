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

var IconPicture = function IconPicture(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconPicture'
    ),
    _react2.default.createElement('path', { d: 'M5.71,5.71V34.29H34.29V5.71ZM32.88,7.12V20.06L30,17.2a2.91,2.91,0,0,0-4.13,0l-6.23,6.23a1.5,1.5,0,0,1-2.13,0L15,20.87a2.9,2.9,0,0,0-4.12,0L7.12,24.6V7.12ZM7.12,32.88V26.6l4.73-4.73a1.54,1.54,0,0,1,2.13,0l2.56,2.56a2.93,2.93,0,0,0,4.12,0l6.23-6.23a1.54,1.54,0,0,1,2.13,0l3.86,3.86V32.88Z' }),
    _react2.default.createElement('path', { d: 'M17.69,17.28a3.64,3.64,0,1,0-3.63-3.63A3.64,3.64,0,0,0,17.69,17.28Zm0-5.86a2.23,2.23,0,1,1-2.22,2.23A2.23,2.23,0,0,1,17.69,11.42Z' })
  );
};

IconPicture.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconPicture.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconPicture;