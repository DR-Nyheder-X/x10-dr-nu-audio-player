import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import Controls from '../Controls'

export default class PlayerPage extends Component {

  constructor (props) {
    super(props)

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  componentDidMount () {
    this.player = findDOMNode(this.refs.player)

    Controls
    .on('play', this.play)
    .on('pause', this.pause)
    .on('prev', this.prev)
    .on('next', this.next)
  }

  componentWillUnmount () {
    Controls
    .off('play', this.play)
    .off('pause', this.pause)
    .off('prev', this.prev)
    .off('next', this.next)
  }

  play () { this.player.play() }
  pause () { this.player.pause() }
  prev () { this.player.currentTime = 0 }
  next () { this.player.currentTime = 0 }

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
