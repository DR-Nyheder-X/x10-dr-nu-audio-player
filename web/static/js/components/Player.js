import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class Player extends Component {
  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentTrack: PropTypes.number,
    playing: PropTypes.bool
  }

  constructor (props) {
    super(props)

    this.updatePlayState = this.updatePlayState.bind(this)
  }

  componentDidMount () {
    this.player = findDOMNode(this.refs.player)

    this.updatePlayState()
  }

  componentDidUpdate (props) {
    this.updatePlayState()
  }

  updatePlayState () {
    if (this.props.playing) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  render () {
    const { tracks, currentTrack } = this.props
    const src = tracks[currentTrack || 0].href

    return <div>
      <audio ref='player' src={src} controls />
    </div>
  }
}
