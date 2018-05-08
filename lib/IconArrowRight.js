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

var IconArrowRight = function IconArrowRight(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconArrowRight'
    ),
    _react2.default.createElement('rect', { transform: 'translate(40 0) rotate(90)' }),
    _react2.default.createElement('path', { d: 'M7.48,20.71H29a1.57,1.57,0,0,1-.17.21L19.05,30.7l1,1,9.78-9.78a2.7,2.7,0,0,0,0-3.82L20.05,8.31l-1,1,9.78,9.78a1.57,1.57,0,0,1,.17.21H7.48Z' })
  );
};

IconArrowRight.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconArrowRight.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconArrowRight;