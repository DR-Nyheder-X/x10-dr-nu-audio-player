import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import Controls from '../Controls'

export default class PlayerPage extends Component {
  componentDidMount () {
    this.player = findDOMNode(this.refs.player)

    Controls
    .on('play', () => { this.player.play() })
    .on('pause', () => { this.player.pause() })
    .on('prev', () => { this.player.currentTime = 0 })
    .on('next', () => { this.player.currentTime = 0 })
  }

  render () {
    return <div>
      <p><Link to='/'>Tilbage</Link></p>
      <audio ref='player' controls>
        <source src='/dummy/audio.mp3' type='audio/mp3' />
      </audio>
      <ul>
        <li><button onClick={Controls.play}>Play</button></li>
        <li><button onClick={Controls.pause}>Pause</button></li>
        <li><button onClick={Controls.prev}>Prev</button></li>
        <li><button onClick={Controls.next}>Next</button></li>
      </ul>
    </div>
  }
}
