import React, { Component } from 'react'
import AudioControls from './AudioControls'
import Progress from './Progress'
import './Card.css'

export default class Card extends Component {
  render () {

    return <div className='Card is-big'>
      <div className='Card-inner'>

        <div className='Card-content'>
          <AudioControls />
          <div className='Card-title'>
            {this.props.children}
          </div>
          <Progress />
        </div>

      </div>
    </div>
  }
}

module.exports = Card
