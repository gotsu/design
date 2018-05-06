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

var IconUser = function IconUser(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconUser'
    ),
    _react2.default.createElement('path', { d: 'M27.32,24.45H12.68A8.71,8.71,0,0,0,4,33.15v2.14H5.39V33.15a7.3,7.3,0,0,1,7.29-7.29H27.32a7.3,7.3,0,0,1,7.29,7.29v2.14H36V33.15A8.71,8.71,0,0,0,27.32,24.45Z' }),
    _react2.default.createElement('path', { d: 'M20,22a8.71,8.71,0,1,0-8.71-8.71A8.72,8.72,0,0,0,20,22ZM20,6a7.3,7.3,0,1,1-7.29,7.29A7.3,7.3,0,0,1,20,6Z' })
  );
};

IconUser.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconUser.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconUser;