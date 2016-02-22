'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ReactDOM from 'react-dom';
import LayoutEngine from 'simple-masonry-layout';

export default React.createClass({

  displayName: 'MasonryLayout',

  propTypes: {
    gutter: React.PropTypes.number,
    columns: React.PropTypes.number,
    width: React.PropTypes.number
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
    return LayoutEngine.generateRectangles(dimensions, numColumns, totalWidth, gutter);
  },

  render: function render() {
    var dimensions = React.Children.map(this.props.children, function (el, i) {
      return {
        width: el.props['original-width'],
        height: el.props['original-height']
      };
    });

    var rectangles = this.calculateRectangles(dimensions, this.props.columns, this.props.width, this.props.gutter);

    var childNodes = React.Children.map(this.props.children, function (el, i) {
      var rectangle = rectangles[i];

      return React.cloneElement(el, _extends({
        key: i
      }, rectangle));
    });

    return React.createElement(
      'div',
      null,
      childNodes
    );
  }
});