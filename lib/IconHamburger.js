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

var IconHamburger = function IconHamburger(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconHamburger'
    ),
    _react2.default.createElement('rect', { x: '6', y: '7.29', width: '28', height: '1.41' }),
    _react2.default.createElement('rect', { x: '6', y: '19.29', width: '28', height: '1.41' }),
    _react2.default.createElement('rect', { x: '6', y: '31.29', width: '28', height: '1.41' })
  );
};

IconHamburger.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconHamburger.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconHamburger;