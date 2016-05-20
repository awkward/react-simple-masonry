'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _simpleMasonryLayout = require('simple-masonry-layout');

var _simpleMasonryLayout2 = _interopRequireDefault(_simpleMasonryLayout);

var MasonryLayout = (function (_React$Component) {
  _inherits(MasonryLayout, _React$Component);

  function MasonryLayout() {
    _classCallCheck(this, MasonryLayout);

    _get(Object.getPrototypeOf(MasonryLayout.prototype), 'constructor', this).call(this);
    this.displayName = 'MasonryLayout';
  }

  _createClass(MasonryLayout, [{
    key: 'calculateRectangles',

    /* Returns an array of rectangles which can be used to map to child elements */
    value: function calculateRectangles(dimensions, numColumns, totalWidth, gutter, gutterX, gutterY) {
      return _simpleMasonryLayout2['default'].generateRectangles(dimensions, numColumns, totalWidth, gutter, gutterX, gutterY);
    }
  }, {
    key: 'render',
    value: function render() {
      var dimensions = _react2['default'].Children.map(this.props.children, function (el, i) {
        return {
          width: el.props['original-width'],
          height: el.props['original-height']
        };
      });

      var rectangles = this.calculateRectangles(_extends({
        dimensions: dimensions
      }, this.props));

      var childNodes = _react2['default'].Children.map(this.props.children, function (el, i) {
        var rectangle = rectangles[i];

        return _react2['default'].cloneElement(el, _extends({
          key: i,
          ref: 'block-' + i
        }, rectangle));
      });

      var height = 0;

      if (rectangles.length) {
        height = rectangles.map(function (r) {
          return r.height + r.y;
        }).sort(function (r1, r2) {
          return r2 - r1;
        })[0];
      }

      return _react2['default'].createElement(
        'div',
        { ref: 'wrapper', style: { width: this.props.width + 'px', height: height + 'px', position: 'relative' } },
        childNodes
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        columns: _react2['default'].PropTypes.number,
        width: _react2['default'].PropTypes.number,
        gutter: _react2['default'].PropTypes.number,
        gutterX: _react2['default'].PropTypes.number,
        gutterY: _react2['default'].PropTypes.number,
        maxHeight: _react2['default'].PropTypes.number,
        collapsing: _react2['default'].PropTypes.bool
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        columns: 15,
        width: 980,
        gutter: 15,
        maxHeight: 0,
        collapsing: true
      };
    }
  }]);

  return MasonryLayout;
})(_react2['default'].Component);

exports['default'] = MasonryLayout;
module.exports = exports['default'];