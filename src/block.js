import React from 'react'

export default class Block extends React.Component {

  static get propTypes () {
    return {
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }
  }

  render () {
    return (
      <div
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          transform: `translate3d(${this.props.x}px, ${this.props.y}px, 0)`,
          position: 'absolute',
          top: 0,
          left: 0,
          border: `1px solid`,
          transition: 'all .2s',
          transitionDelay: '.2s'
        }}
      >

        {this.props.children}

      </div>
    )
  }

}
