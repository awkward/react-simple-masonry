import React from 'react'
import ReactDOM from 'react-dom'
import LayoutEngine from 'simple-masonry-layout'

export default React.createClass({

  displayName: 'MasonryLayout',

  propTypes: {
    gutter: React.PropTypes.number,
    columns: React.PropTypes.number,
    width: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      gutter: 5,
      columns: 15,
      width: 980
    }
  },

  /* Returns an array of rectangles which can be used to map to child elements */
  calculateRectangles: function (dimensions, numColumns, totalWidth, gutter) {
    return LayoutEngine.generateRectangles(dimensions, numColumns, totalWidth, gutter)
  },

  render() {
    const dimensions = React.Children.map(this.props.children, (el, i) => {
      return {
        width: el.props['original-width'],
        height: el.props['original-height']
      }
    })

    const rectangles = this.calculateRectangles(dimensions, this.props.columns, this.props.width, this.props.gutter)

    const childNodes = React.Children.map(this.props.children, (el, i) => {
      const rectangle = rectangles[i]

      return React.cloneElement(el, {
        key: i,
        ...rectangle
      })
    })

    return (<div>{childNodes}</div>)
  }
})
