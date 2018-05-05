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

var IconPencil = function IconPencil(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconPencil'
    ),
    _react2.default.createElement('path', { d: 'M24.47,7.48,22.59,5.6a1.73,1.73,0,0,0-2.41,0l-7.29,7.29,1,1L21.18,6.6a.25.25,0,0,1,.42,0l1.87,1.88-18,18a1.69,1.69,0,0,0-.48,1L4.06,34a1.71,1.71,0,0,0,.48,1.44A1.67,1.67,0,0,0,5.75,36L6,36l6.51-.87a1.72,1.72,0,0,0,1-.48L36.71,11.36,28.64,3.29Zm0,2,6.07,6.07L14.85,31.23l-6-6Zm-12,24.13a.3.3,0,0,1-.16.08l-6.52.87a.29.29,0,0,1-.25-.08.28.28,0,0,1-.08-.25l1-6.55a.3.3,0,0,1,.08-.16l1.31-1.32,6,6ZM34.71,11.36l-3.18,3.18L25.47,8.47l3.17-3.18Z' }),
    '  '
  );
};

IconPencil.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconPencil.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconPencil;