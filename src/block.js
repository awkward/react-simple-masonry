import React from 'react'

export default ({ width, height, x, y, children }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${x}px, ${y}px)`,
        position: 'absolute',
        top: 0,
        left: 0,
        border: `1px solid`
      }}
    >

      {children}

    </div>
  )
}
