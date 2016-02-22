'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = function (_ref) {
  var width = _ref.width;
  var height = _ref.height;
  var x = _ref.x;
  var y = _ref.y;
  var children = _ref.children;

  return _react2['default'].createElement(
    'div',
    {
      style: {
        width: width + 'px',
        height: height + 'px',
        transform: 'translate(' + x + 'px, ' + y + 'px)',
        position: 'absolute',
        top: 0,
        left: 0,
        border: '1px solid'
      }
    },
    children
  );
};

module.exports = exports['default'];