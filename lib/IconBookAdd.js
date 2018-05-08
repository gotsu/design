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

var IconBookAdd = function IconBookAdd(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconBookAdd'
    ),
    _react2.default.createElement('path', { d: 'M12,4.66a4.72,4.72,0,0,0-4.71,4.7V30.64A4.72,4.72,0,0,0,12,35.34H32.71V4.66Zm0,1.41H31.29V24.69H12A4.7,4.7,0,0,0,8.71,26V9.36A3.29,3.29,0,0,1,12,6.07Zm0,27.86a3.29,3.29,0,0,1-3.29-3.29V29.4A3.29,3.29,0,0,1,12,26.1H31.29v7.83Z' }),
    _react2.default.createElement('polygon', { points: '19.3 20 20.71 20 20.71 16.2 24.5 16.2 24.5 14.79 20.71 14.79 20.71 10.99 19.3 10.99 19.3 14.79 15.49 14.79 15.49 16.2 19.3 16.2 19.3 20' })
  );
};

IconBookAdd.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconBookAdd.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconBookAdd;