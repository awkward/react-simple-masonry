import React from 'react'
import {render} from 'react-dom'
import Component from '../../src'
import Block from '../../src/block'

let Demo = React.createClass({

  render() {
    return <div>
      <h1>simple-masonry-layout Demo</h1>
      <Component width={980} columns={4} gutterX={50} gutterY={50}>

        <Block original-width={300} original-height={900}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={750}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={850}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

      </Component>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
