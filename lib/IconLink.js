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

var IconLink = function IconLink(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconLink'
    ),
    _react2.default.createElement('path', { d: 'M16.2,27.86a4.06,4.06,0,0,1-2.87-6.93l3.16-3.16a4.07,4.07,0,0,1,5.74,0l.79.79-1,1-.79-.79a2.65,2.65,0,0,0-3.74,0l-3.16,3.16a2.63,2.63,0,0,0,0,3.74,2.71,2.71,0,0,0,3.74,0l.76-.76,1,1-.76.76A4.05,4.05,0,0,1,16.2,27.86Z' }),
    _react2.default.createElement('path', { d: 'M20.64,23.42a4.05,4.05,0,0,1-2.87-1.19L17,21.44l1-1,.79.79a2.65,2.65,0,0,0,3.74,0l3.16-3.16a2.63,2.63,0,0,0,0-3.74,2.71,2.71,0,0,0-3.74,0l-.76.76-1-1,.76-.76a4.07,4.07,0,0,1,5.74,0,4.06,4.06,0,0,1,0,5.74l-3.16,3.16A4.05,4.05,0,0,1,20.64,23.42Z' }),
    _react2.default.createElement('path', { d: 'M20,34.29A14.29,14.29,0,1,1,34.29,20,14.31,14.31,0,0,1,20,34.29ZM20,7.12A12.88,12.88,0,1,0,32.88,20,12.9,12.9,0,0,0,20,7.12Z' })
  );
};

IconLink.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconLink.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconLink;