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

var IconArrowTop = function IconArrowTop(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconArrowTop'
    ),
    _react2.default.createElement('path', { d: 'M18.09,10.17,8.31,20l1,1,9.78-9.78a1.57,1.57,0,0,1,.21-.17V32.52h1.42V11a1.57,1.57,0,0,1,.21.17L30.7,21l1-1-9.78-9.78A2.77,2.77,0,0,0,18.09,10.17Z' })
  );
};

IconArrowTop.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconArrowTop.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconArrowTop;