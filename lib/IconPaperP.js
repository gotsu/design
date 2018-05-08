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

var IconPaperP = function IconPaperP(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconPaperP'
    ),
    _react2.default.createElement('path', { d: 'M7.37,7.56V32.44a2.72,2.72,0,0,0,2.71,2.71H23.85l8.78-8.78V4.85H10.08A2.72,2.72,0,0,0,7.37,7.56ZM24.26,32.74v-6h6Zm7-7.37H22.85v8.37H10.08a1.3,1.3,0,0,1-1.3-1.3V7.56a1.3,1.3,0,0,1,1.3-1.3H31.22Z' }),
    _react2.default.createElement('path', { d: 'M18.13,20.64l2.91,0a3.69,3.69,0,0,0,0-7.37H16.72v11h1.41Zm0-6H21a2.27,2.27,0,0,1,0,4.54l-2.9,0Z' })
  );
};

IconPaperP.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconPaperP.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconPaperP;