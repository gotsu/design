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

var IconAngleRight = function IconAngleRight(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconAngleRight'
    ),
    _react2.default.createElement('path', { d: 'M13.65,33.39l1,1L27.12,21.91a2.7,2.7,0,0,0,0-3.82L14.7,5.67l-1,1L26.12,19.08a1.3,1.3,0,0,1,0,1.84Z' })
  );
};

IconAngleRight.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconAngleRight.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconAngleRight;