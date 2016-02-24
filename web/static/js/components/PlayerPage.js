import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Controls from '../Controls'
import Player from './Player'
import { connect } from 'react-redux'
import { register } from '../store'

export const PLAY = 'player/PLAY'
export function play () {
  return { type: PLAY }
}

export const PAUSE = 'player/PAUSE'
export function pause () {
  return { type: PAUSE }
}

export const PREV = 'player/PREV'
export function prev () {
  return { type: PREV }
}

export const NEXT = 'player/NEXT'
export function next () {
  return { type: NEXT }
}

export const init = {
  tracks: [
    { title: 'Inside my Pants', href: 'http://s3.brnbw.com/03-Inside-My-Pants.mp3' },
    { title: 'Sweatshop', href: 'http://s3.brnbw.com/02-Sweatshop.mp3' },
    { title: 'Indiana', href: 'http://s3.brnbw.com/02-Indiana.mp3' }
  ],
  playing: false,
  currentTrack: 0
}

export const reducer = function playerReducer (state = init, action) {
  switch (action.type) {
    case PLAY: return { ...state, playing: true }
    case PAUSE: return { ...state, playing: false }
    case PREV: {
      const { tracks, currentTrack } = state
      const index = currentTrack - 1
      const track = tracks[index] && index || 0
      return { ...state, currentTrack: track }
    }
    case NEXT: {
      const { tracks, currentTrack } = state
      const index = currentTrack + 1
      const track = tracks[index] && index || tracks.length - 1
      return { ...state, currentTrack: track }
    }
    default: return state
  }
}

register(reducer, 'player')

const stateToProps = state => ({
  tracks: state.player.tracks,
  playing: state.player.playing,
  currentTrack: state.player.currentTrack
})

class PlayerPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
    playing: PropTypes.bool.isRequired,
    currentTrack: PropTypes.number
  }

  constructor (props) {
    super(props)

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  componentDidMount () {
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

  play () { this.props.dispatch(play()) }
  pause () { this.props.dispatch(pause()) }
  prev () { this.props.dispatch(prev()) }
  next () { this.props.dispatch(next()) }

  render () {
    const { tracks, playing, currentTrack } = this.props

    return <div>
      <p><Link to='/'>Tilbage</Link></p>
      <Player {...{ tracks, playing, currentTrack }} />
      <ul>
        {tracks.map((track, i) => (
          <li key={i}>
            {i === currentTrack &&
              <strong>{track.title}</strong>}
            {i !== currentTrack &&
              <span>{track.title}</span>}
          </li>
        ))}
      </ul>
      <ul>
        <li><button onClick={Controls.play}>Play</button></li>
        <li><button onClick={Controls.pause}>Pause</button></li>
        <li><button onClick={Controls.prev}>Prev</button></li>
        <li><button onClick={Controls.next}>Next</button></li>
      </ul>
    </div>
  }
}

export default connect(stateToProps)(PlayerPage)
