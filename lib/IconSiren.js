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

var IconSiren = function IconSiren(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconSiren'
    ),
    _react2.default.createElement('path', { d: 'M20,10A12.72,12.72,0,0,0,7.29,22.74v12H32.71v-12A12.72,12.72,0,0,0,20,10ZM31.29,33.29H8.71V22.74a11.29,11.29,0,1,1,22.58,0Z' }),
    _react2.default.createElement('rect', { x: '19.29', y: '0.05', width: '1.41', height: '5.95' }),
    _react2.default.createElement('rect', { 'class': 'cls-2', x: '29.13', y: '7.19', width: '5.95', height: '1.41', transform: 'translate(3.82 25.01) rotate(-45)' }),
    _react2.default.createElement('rect', { x: '7.19', y: '4.92', width: '1.41', height: '5.95', transform: 'translate(-3.27 7.9) rotate(-45)' }),
    _react2.default.createElement('path', { d: 'M11.6,22.31v4.14H13V22.31a7.29,7.29,0,0,1,3.85-6.43l-.67-1.24A8.7,8.7,0,0,0,11.6,22.31Z' })
  );
};

IconSiren.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconSiren.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconSiren;