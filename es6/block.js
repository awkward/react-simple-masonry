'use strict';

import React from 'react';

export default function (_ref) {
  var width = _ref.width;
  var height = _ref.height;
  var x = _ref.x;
  var y = _ref.y;
  var children = _ref.children;

  return React.createElement(
    'div',
    {
      style: {
        width: width + 'px',
        height: height + 'px',
        transform: 'translate(' + x + 'px, ' + y + 'px)',
        position: 'absolute',
        top: 0,
        left: 0,
        border: '1px solid'
      }
    },
    children
  );
}