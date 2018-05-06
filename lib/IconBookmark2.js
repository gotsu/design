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

var IconBookmark2 = function IconBookmark2(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconBookmark2'
    ),
    _react2.default.createElement('path', { d: 'M9.75,34.46a.9.9,0,0,0,.91,0L20,28.87l9.34,5.58h0a.84.84,0,0,0,.46.13.91.91,0,0,0,.91-.91V5.29H9.29V33.67A.91.91,0,0,0,9.75,34.46Zm1-27.75H29.29V32.78L20,27.23l-9.29,5.55Z' })
  );
};

IconBookmark2.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconBookmark2.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconBookmark2;