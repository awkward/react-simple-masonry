import React from 'react'
import ReactDOM from 'react-dom'
import LayoutEngine from 'simple-masonry-layout'

export default React.createClass({

  displayName: 'MasonryLayout',

  propTypes: {
    columns: React.PropTypes.number,
    width: React.PropTypes.number,
    gutter: React.PropTypes.number,
    gutterX: React.PropTypes.number,
    gutterY: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      columns: 15,
      width: 980,
      gutter: 15
    }
  },

  /* Returns an array of rectangles which can be used to map to child elements */
  calculateRectangles: function (dimensions, numColumns, totalWidth, gutter, gutterX, gutterY) {
    return LayoutEngine.generateRectangles(dimensions, numColumns, totalWidth, gutter, gutterX, gutterY)
  },

  render() {
    const dimensions = React.Children.map(this.props.children, (el, i) => {
      return {
        width: el.props['original-width'],
        height: el.props['original-height']
      }
    })

    const rectangles = this.calculateRectangles({ 
      dimensions, 
      columns: this.props.columns, 
      width: this.props.width, 
      gutter: this.props.gutter, 
      gutterX: this.props.gutterX, 
      gutterY: this.props.gutterY 
    })

    const childNodes = React.Children.map(this.props.children, (el, i) => {
      const rectangle = rectangles[i]

      return React.cloneElement(el, {
        key: i,
        ...rectangle
      })
    })

    let height = 0

    if (rectangles.length) {
      height = rectangles
        .map((r) => r.height + r.y)
        .sort((r1, r2) => (r2 - r1))[0]
    }

    return (
      <div style={{ width: `${this.props.width}px`, height: `${height}px`, position: 'relative' }}>{childNodes}</div>
    )
  }
})
