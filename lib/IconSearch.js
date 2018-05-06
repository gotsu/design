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

var IconSearch = function IconSearch(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconSearch'
    ),
    _react2.default.createElement('path', { d: 'M30.71,17.35a13.43,13.43,0,1,0-4.44,9.91L35,36l1-1-8.7-8.69A13.26,13.26,0,0,0,30.71,17.35ZM17.35,29.29A11.94,11.94,0,1,1,29.29,17.35,11.95,11.95,0,0,1,17.35,29.29Z' })
  );
};

IconSearch.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconSearch.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconSearch;