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

var IconMore = function IconMore(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconMore'
    ),
    _react2.default.createElement('rect', { 'class': 'cls-2', x: '28', y: '18', width: '4', height: '4' }),
    _react2.default.createElement('rect', { 'class': 'cls-2', x: '18', y: '18', width: '4', height: '4' }),
    _react2.default.createElement('rect', { 'class': 'cls-2', x: '8', y: '18', width: '4', height: '4' })
  );
};

IconMore.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconMore.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconMore;