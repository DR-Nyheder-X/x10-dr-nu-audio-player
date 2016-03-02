import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resolve } from 'redux-simple-promise'
import {
  PLAY, PAUSE, PREV, NEXT,
  play, pause, prev, next
} from '../Controls'
import Player from './Player'
import Card from './Card'
import { register } from '../store'
import { get } from '../api'

export const FETCH_EPISODES = 'player/FETCH_EPISODES'
export function fetchEpisodes () {
  return {
    type: FETCH_EPISODES,
    payload: { promise: get('/episodes') }
  }
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

    this.handleEnded = this.handleEnded.bind(this)
  }

  componentDidMount () {
    if (this.props.episodes.length === 0) {
      this.props.dispatch(fetchEpisodes())
    }
  }

  handleEnded (event) {
    this.props.dispatch(next())
  }

  render () {
    const { episodes, playing, currentTrack, dispatch } = this.props
    const track = episodes[currentTrack || 0]

    return <div id='PlayerPage'>
      <button onClick={() => dispatch(play())}>Play</button>
      <button onClick={() => dispatch(pause())}>Pause</button>
      <button onClick={() => dispatch(prev())}>Prev</button>
      <button onClick={() => dispatch(next())}>Next</button>
      {episodes.map((episode, i) => (
        <Card
          playing={i === currentTrack && playing}
          key={episode.id}
          episode={episode}
          onPlay={() => dispatch()}
          onEnded={() => dispatch()}
        />
      ))}
    </div>
  }
}

export default connect(stateToProps)(PlayerPage)
