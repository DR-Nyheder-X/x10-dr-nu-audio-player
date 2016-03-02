import React, { Component } from 'react'
import AudioControls from './AudioControls'
import Progress from './Progress'
import './Card.css'

export default class Card extends Component {
  render () {

    return <div className='Card Card-isBig'>
      <div className='Card-inner'>

        <div className='Card-content'>

          <div className='Card-controlsAndTitle'>
            <AudioControls />
            <div className='Card-title'>
              {this.props.children}
            </div>
          </div>

          <Progress />
        </div>

      </div>
    </div>
  }
}

module.exports = Card
