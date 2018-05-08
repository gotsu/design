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

var IconExport = function IconExport(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconExport'
    ),
    _react2.default.createElement('polygon', { points: '32.71 15.29 24 15.29 24 16.7 31.29 16.7 31.29 31.3 8.71 31.3 8.71 16.7 16 16.7 16 15.29 7.29 15.29 7.29 32.71 32.71 32.71 32.71 15.29' }),
    _react2.default.createElement('polygon', { points: '20.7 26 20.7 6.41 25.15 10.86 26.15 9.86 20 3.71 13.84 9.86 14.84 10.86 19.29 6.41 19.29 26 20.7 26' })
  );
};

IconExport.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconExport.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconExport;