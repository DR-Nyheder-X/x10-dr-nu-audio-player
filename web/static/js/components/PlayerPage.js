import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'

export default class PlayerPage extends Component {
  componentDidMount () {
    this.player = findDOMNode(this.refs.player)
  }

  render () {
    return <div>
      <p><Link to='/'>Tilbage</Link></p>
      <audio src='/dummy/audio.mp4' ref='player' controls />
    </div>
  }
}
