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

var IconHome = function IconHome(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconHome'
    ),
    _react2.default.createElement('path', { d: 'M21.42,4.71a2.08,2.08,0,0,0-2.84,0l-14,12.83A1.73,1.73,0,0,0,4,18.8V36H16.71V26.17a3.42,3.42,0,0,1,3-3.45A3.28,3.28,0,0,1,23.29,26V36H36V18.8a1.73,1.73,0,0,0-.55-1.26ZM34.56,34.58H24.71V26a4.72,4.72,0,0,0-5.17-4.68,4.83,4.83,0,0,0-4.25,4.85v8.41H5.44V18.8a.32.32,0,0,1,.1-.22l14-12.83a.68.68,0,0,1,.94,0l14,12.83a.32.32,0,0,1,.1.22Z' })
  );
};

IconHome.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconHome.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconHome;