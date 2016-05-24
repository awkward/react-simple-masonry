import React from 'react'
import ReactDOM from 'react-dom'
import LayoutEngine from 'simple-masonry-layout'

export default class MasonryLayout extends React.Component {

  constructor () {
    super()
    this.displayName = 'MasonryLayout'
  }

  static get propTypes () {
    return {
      columns: React.PropTypes.number,
      width: React.PropTypes.number,
      gutter: React.PropTypes.number,
      gutterX: React.PropTypes.number,
      gutterY: React.PropTypes.number,
      maxHeight: React.PropTypes.number,
      collapsing: React.PropTypes.bool,
      customize: React.PropTypes.func,
      centering: React.PropTypes.bool
    }
  }

  static get defaultProps () {
    return {
      columns: 15,
      width: 980,
      gutter: 15,
      maxHeight: 0,
      collapsing: true,
      customize: null,
      centering: false
    }
  }

  /* Returns an array of rectangles which can be used to map to child elements */
  calculateRectangles (options) {
    return LayoutEngine.generateRectangles(options)
  }

  render() {
    const dimensions = React.Children.map(this.props.children, (child, i) => {
      return {
        width: child.props['original-width'],
        height: child.props['original-height']
      }
    })

    const rectangles = this.calculateRectangles({
      dimensions,
      ...this.props
    })

    const childNodes = React.Children.map(this.props.children, (el, i) => {
      const rectangle = rectangles[i]

      return React.cloneElement(el, {
        key: i,
        ref: `block-${i}`,
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
      <div ref='wrapper' style={{ width: `${this.props.width}px`, height: `${height}px`, position: 'relative' }}>{childNodes}</div>
    )
  }
}
