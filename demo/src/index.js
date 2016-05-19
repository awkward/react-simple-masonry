import React from 'react'
import {render} from 'react-dom'
import Component from '../../src'
import Block from '../../src/block'

let Demo = class Demo extends React.Component {

  componentWillMount () {
    this.setState({
      width: document.body.clientWidth
    })

    this.onresizeListener = this.onResize.bind(this)

    window.addEventListener('resize', this.onresizeListener)
  }

  onResize () {
    this.setState({
      width: document.body.clientWidth
    })
  }

  render() {
    return <div>
      <h1>simple-masonry-layout Demo</h1>
      <Component width={this.state.width} columns={4} gutterX={20} gutterY={20} maxHeight={550} collapsing={true}>

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

        <Block original-width={500} original-height={850}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

        <Block original-width={500} original-height={1000}>
            <div className="block"></div>
        </Block>

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
}

render(<Demo/>, document.querySelector('#demo'))
