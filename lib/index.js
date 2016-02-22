'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _simpleMasonryLayout = require('simple-masonry-layout');

var _simpleMasonryLayout2 = _interopRequireDefault(_simpleMasonryLayout);

exports['default'] = _react2['default'].createClass({

  displayName: 'MasonryLayout',

  propTypes: {
    gutter: _react2['default'].PropTypes.number,
    columns: _react2['default'].PropTypes.number,
    width: _react2['default'].PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      gutter: 5,
      columns: 15,
      width: 980
    };
  },

  /* Returns an array of rectangles which can be used to map to child elements */
  calculateRectangles: function calculateRectangles(dimensions, numColumns, totalWidth, gutter) {
    return _simpleMasonryLayout2['default'].generateRectangles(dimensions, numColumns, totalWidth, gutter);
  },

  render: function render() {
    var dimensions = _react2['default'].Children.map(this.props.children, function (el, i) {
      return {
        width: el.props['original-width'],
        height: el.props['original-height']
      };
    });

    var rectangles = this.calculateRectangles(dimensions, this.props.columns, this.props.width, this.props.gutter);

    var childNodes = _react2['default'].Children.map(this.props.children, function (el, i) {
      var rectangle = rectangles[i];

      return _react2['default'].cloneElement(el, _extends({
        key: i
      }, rectangle));
    });

    return _react2['default'].createElement(
      'div',
      null,
      childNodes
    );
  }
});
module.exports = exports['default'];