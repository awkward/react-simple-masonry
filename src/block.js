import React from 'react'

export default ({ width, height, x, y, children }) => {

  const style = {
    width,
    height,
    transform: `translate3d(${x}px, ${y}px, 0)`,
    position: 'absolute',
    top: 0,
    left: 0,
    border: `1px solid`,
    transition: `transform .2s`
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}