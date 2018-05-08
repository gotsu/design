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

var IconShare = function IconShare(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconShare'
    ),
    _react2.default.createElement('path', { d: 'M30,14a6,6,0,0,0-5,2.65l-10.6-5.47a5.37,5.37,0,1,0-.65,1.26l10.61,5.47A6.07,6.07,0,0,0,24,20a6,6,0,0,0,.43,2.2L13.9,27.81a5.33,5.33,0,1,0,.81,2.81,5.08,5.08,0,0,0-.23-1.52l10.57-5.67A6,6,0,1,0,30,14ZM9.35,13.29a3.94,3.94,0,1,1,3.94-3.94A3.94,3.94,0,0,1,9.35,13.29Zm0,21.27a3.95,3.95,0,1,1,3.94-3.94A3.95,3.95,0,0,1,9.35,34.56ZM30,24.59A4.61,4.61,0,1,1,34.59,20,4.61,4.61,0,0,1,30,24.59Z' })
  );
};

IconShare.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconShare.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconShare;