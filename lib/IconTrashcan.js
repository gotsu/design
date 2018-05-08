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

var IconTrashcan = function IconTrashcan(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconTrashcan'
    ),
    _react2.default.createElement('path', { d: 'M25.7,7A1.72,1.72,0,0,0,24,5.29H16A1.72,1.72,0,0,0,14.3,7V9.29H6v1.42H9.29v24H30.71v-24H34.1V9.29H25.7Zm-10,0a.29.29,0,0,1,.3-.29h8a.29.29,0,0,1,.3.29V9.29H15.71ZM29.29,33.29H10.71V10.71H29.29Z' }),
    _react2.default.createElement('rect', { x: '16.29', y: '17.12', width: '1.41', height: '9.78' }),
    _react2.default.createElement('rect', { x: '22.29', y: '17.12', width: '1.41', height: '9.78' })
  );
};

IconTrashcan.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconTrashcan.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconTrashcan;