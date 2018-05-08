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

var IconAngleBottom = function IconAngleBottom(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconAngleBottom'
    ),
    _react2.default.createElement('rect', { transform: 'translate(0 40) rotate(-90)' }),
    _react2.default.createElement('path', { d: 'M20.92,26.12a1.3,1.3,0,0,1-1.84,0L6.61,13.65l-1,1L18.09,27.12a2.7,2.7,0,0,0,3.82,0L34.33,14.7l-1-1Z' })
  );
};

IconAngleBottom.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconAngleBottom.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconAngleBottom;