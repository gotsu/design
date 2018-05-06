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

var IconChat = function IconChat(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconChat'
    ),
    _react2.default.createElement('path', { d: 'M4,28.71H27l5.42,5.42a2.06,2.06,0,0,0,1.47.62,2.14,2.14,0,0,0,.82-.16,2.09,2.09,0,0,0,1.3-2V7.29H4Zm1.41-20H34.59V32.64a.68.68,0,0,1-.43.64.66.66,0,0,1-.75-.15L27.57,27.3H5.41Z' }),
    _react2.default.createElement('rect', { x: '13.29', y: '16', width: '1.41', height: '4' }),
    _react2.default.createElement('rect', { x: '19.29', y: '16', width: '1.41', height: '4' }),
    _react2.default.createElement('rect', { x: '25.29', y: '16', width: '1.41', height: '4' })
  );
};

IconChat.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconChat.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconChat;