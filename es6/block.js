'use strict';

import React from 'react';

export default function (_ref) {
  var width = _ref.width;
  var height = _ref.height;
  var x = _ref.x;
  var y = _ref.y;
  var children = _ref.children;

  var style = {
    width: width,
    height: height,
    transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    border: '1px solid',
    transition: 'transform .2s'
  };

  return React.createElement(
    'div',
    { style: style },
    children
  );
}