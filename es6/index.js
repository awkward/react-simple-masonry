'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ReactDOM from 'react-dom';
import LayoutEngine from 'simple-masonry-layout';

export default React.createClass({

  displayName: 'MasonryLayout',

  propTypes: {
    columns: React.PropTypes.number,
    width: React.PropTypes.number,
    gutter: React.PropTypes.number,
    gutterX: React.PropTypes.number,
    gutterY: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      columns: 15,
      width: 980
    };
  },

  /* Returns an array of rectangles which can be used to map to child elements */
  calculateRectangles: function calculateRectangles(dimensions, numColumns, totalWidth, gutter) {
    return LayoutEngine.generateRectangles(dimensions, numColumns, totalWidth, gutter);
  },

  render: function render() {
    var dimensions = React.Children.map(this.props.children, function (el, i) {
      return {
        width: el.props['original-width'],
        height: el.props['original-height']
      };
    });

    var rectangles = this.calculateRectangles(dimensions, this.props.columns, this.props.width, this.props.gutter || 0, this.props.gutterX, this.props.gutterY);

    var childNodes = React.Children.map(this.props.children, function (el, i) {
      var rectangle = rectangles[i];

      return React.cloneElement(el, _extends({
        key: i
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

    return React.createElement(
      'div',
      { style: { width: this.props.width + 'px', height: height + 'px', position: 'relative' } },
      childNodes
    );
  }
});