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
      collapsing: React.PropTypes.bool
    }
  }

  static get defaultProps () {
    return {
      columns: 15,
      width: 980,
      gutter: 15,
      maxHeight: 0,
      collapsing: true
    }
  }

  /* Returns an array of rectangles which can be used to map to child elements */
  calculateRectangles (dimensions, numColumns, totalWidth, gutter, gutterX, gutterY) {
    return LayoutEngine.generateRectangles(dimensions, numColumns, totalWidth, gutter, gutterX, gutterY)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // recalculate dimensions
    const refs = Object.keys(this.refs)
      .filter(key => /block/.test(key))
      .map(key => this.refs[key])
    const dimensions = refs.map((ref) => ({ width: ref.props['original-width'], height: ref.props['original-height'] }))

    const rectangles = this.calculateRectangles({
      dimensions,
      ...nextProps
    })

    refs.forEach((ref, i) => {
      const node = ReactDOM.findDOMNode(ref)
      const rectangle = rectangles[i]

      node.style.transform = `translate3d(${rectangle.x}px, ${rectangle.y}px, 0)`
      node.style.width = `${rectangle.width}px`
      node.style.height = `${rectangle.height}px`
      node.style.position = 'absolute'
      node.style.top = 0
      node.style.left = 0
    })

    let height = 0

    if (rectangles.length) {
      height = rectangles
        .map((r) => r.height + r.y)
        .sort((r1, r2) => (r2 - r1))[0]
    }

    const wrapper = ReactDOM.findDOMNode(this.refs.wrapper)
    wrapper.style.width = `${nextProps.width}px`
    wrapper.style.height = `${height}px`

    return false
  }

  render() {
    const dimensions = React.Children.map(this.props.children, (el, i) => {
      return {
        width: el.props['original-width'],
        height: el.props['original-height']
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
