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

var IconClock = function IconClock(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconClock'
    ),
    _react2.default.createElement('path', { d: 'M20,4A16,16,0,1,0,36,20,16,16,0,0,0,20,4Zm0,30.53A14.56,14.56,0,1,1,34.56,20,14.57,14.57,0,0,1,20,34.56Z' }),
    _react2.default.createElement('polygon', { points: '19.36 12.38 17.95 12.38 17.95 21.32 25.51 26.35 26.29 25.18 19.36 20.56 19.36 12.38' })
  );
};

IconClock.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconClock.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconClock;