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

var IconAlignRight = function IconAlignRight(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 40 40' }, props),
    _react2.default.createElement(
      'title',
      null,
      'IconAlignRight'
    ),
    _react2.default.createElement('rect', { x: '9.53', y: '10.82', width: '20.94', height: '1.41' }),
    _react2.default.createElement('rect', { x: '11.44', y: '22.12', width: '19.03', height: '1.41' }),
    _react2.default.createElement('rect', { x: '15.32', y: '16.47', width: '15.15', height: '1.41' }),
    _react2.default.createElement('rect', { x: '15.32', y: '27.77', width: '15.15', height: '1.41' })
  );
};

IconAlignRight.defaultProps = {
  width: '40px',
  fill: '#656565'
};

IconAlignRight.propTypes = {
  width: _propTypes2.default.string,
  fill: _propTypes2.default.string
};

exports.default = IconAlignRight;