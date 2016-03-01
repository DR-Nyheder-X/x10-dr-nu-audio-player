import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Controls from '../Controls'
import Player from './Player'
import { connect } from 'react-redux'
import { register } from '../store'
import { get } from '../api'
import { resolve } from 'redux-simple-promise'

export const FETCH_EPISODES = 'player/FETCH_EPISODES'
export function fetchEpisodes () {
  return {
    type: FETCH_EPISODES,
    payload: { promise: get('/episodes') }
  }
}

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
  episodes: [],
  playing: false,
  currentTrack: 0
}

export const reducer = function playerReducer (state = init, action) {
  switch (action.type) {
    case resolve(FETCH_EPISODES):
      return { ...state, episodes: action.payload.data }
    case PLAY:
      if (state.episodes.length === 0) return state
      return { ...state, playing: true }
    case PAUSE:
      if (state.episodes.length === 0) return state
      return { ...state, playing: false }
    case PREV: {
      if (state.episodes.length === 0) return state
      const { episodes, currentTrack } = state
      const index = currentTrack - 1
      const track = episodes[index] && index || 0
      return { ...state, currentTrack: track }
    }
    case NEXT: {
      if (state.episodes.length === 0) return state
      const { episodes, currentTrack } = state
      const index = currentTrack + 1
      const track = episodes[index] && index || episodes.length - 1
      return { ...state, currentTrack: track }
    }
    default: return state
  }
}

register(reducer, 'player')

const stateToProps = (state) => ({
  episodes: state.player.episodes,
  playing: state.player.playing,
  currentTrack: state.player.currentTrack
})

class PlayerPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    playing: PropTypes.bool.isRequired,
    currentTrack: PropTypes.number
  }

  constructor (props) {
    super(props)

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)

    this.handleEnded = this.handleEnded.bind(this)
  }

  componentDidMount () {
    Controls
    .on('play', this.play)
    .on('pause', this.pause)
    .on('prev', this.prev)
    .on('next', this.next)

    this.props.dispatch(fetchEpisodes())
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

  handleEnded (event) {
    this.props.dispatch(next())
  }

  render () {
    const { episodes, playing, currentTrack } = this.props
    const track = episodes[currentTrack || 0]

    return <div>
      <p><Link to='/'>Tilbage</Link></p>
      {track &&
        <Player
          src={track.audio}
          playing={playing}
          onEnded={this.handleEnded}
        />
      }
      <ul>
        {episodes.map((track, i) => (
          <li key={i}>
            {i === currentTrack &&
              <strong>{track.headline}</strong>}
            {i !== currentTrack &&
              <span>{track.headline}</span>}
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
