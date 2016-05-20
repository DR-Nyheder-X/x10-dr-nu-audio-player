import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { resolve } from 'redux-simple-promise'
import { PLAY, PAUSE, PREV, play, pause, prev, next } from '../Controls'
import { FETCH_EPISODES } from './PlaylistPage'

export const ENDED = 'player/ENDED'
export function ended () {
  return { type: ENDED }
}

export const ELAPSED = 'player/ELAPSED'
export function elapsed ({episode, time}) {
  return { type: ELAPSED, payload: {episode, time} }
}

export const SET_DURATION = 'player/SET_DURATION'
export function setDuration ({episode, duration}) {
  return { type: SET_DURATION, payload: {episode, duration} }
}

export const SCRUB_TO = 'player/SCRUB_TO'
export function scrubTo (position) {
  return { type: SCRUB_TO, payload: position }
}

export const init = {
  elapsed: {},
  duration: {},
  playing: false,
  currentEpisode: null,
  scrubTo: null
}

export const reducer = function playerReducer (state = init, action) {
  switch (action.type) {

    case PLAY: return {
      ...state,
      playing: true,
      currentEpisode: action.payload || state.currentEpisode
    }

    case PAUSE:
      return { ...state, playing: false }

    case PREV: {
      const id = state.currentEpisode.id
      return { ...state, elapsed: {
        ...state.elapsed,
        [id]: Math.max(0, state.elapsed[id] - 10)
      } }
    }

    case ELAPSED: return {
      ...state,
      elapsed: {
        ...state.elapsed,
        [action.payload.episode.id]: action.payload.time
      }
    }

    case SET_DURATION: return {
      ...state,
      duration: {
        ...state.duration,
        [action.payload.episode.id]: action.payload.duration
      }
    }

    case SCRUB_TO:
      return { ...state, scrubTo: action.payload }

    case resolve(FETCH_EPISODES):
      return { ...state, currentEpisode: action.payload.data[0] || null }

    default: return state
  }
}

const stateToProps = (state) => ({
  elapsed: state.app.player.elapsed,
  duration: state.app.player.duration,
  playing: state.app.player.playing,
  currentEpisode: state.app.player.currentEpisode,
  scrubTo: state.app.player.scrubTo
})

const mappedEvents = [
  'playing', 'pause', 'timeupdate', 'ended', 'loadstart', 'loadedmetadata'
]

class Player extends Component {
  static propTypes = {
    elapsed: PropTypes.object.isRequired,
    duration: PropTypes.object.isRequired,
    playing: PropTypes.bool.isRequired,
    currentEpisode: PropTypes.object,
    scrubTo: PropTypes.number
  }

  constructor (props) {
    super(props)

    this.updatePlayState = this.updatePlayState.bind(this)

    mappedEvents.forEach((event) => {
      this[event] = this[event].bind(this)
    })
  }

  componentDidMount () {
    this.player = findDOMNode(this.refs.player)

    mappedEvents.forEach((event) => {
      this.player.addEventListener(event, this[event])
    })

    this.updatePlayState(this.props)
  }

  componentWillUnmount () {
    mappedEvents.forEach((event) => {
      this.player.removeEventListener(event, this[event])
    })
  }

  componentDidUpdate (prevProps) {
    this.updatePlayState(this.props)

    const id = this.props.currentEpisode.id
    if (this.props.elapsed[id] < prevProps.elapsed[id]) {
      this.player.currentTime = this.props.elapsed[id]
    }

    if (this.props.scrubTo !== prevProps.scrubTo) {
      this.player.currentTime = this.props.scrubTo
    }
  }

  updatePlayState (props) {
    if (props.playing) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  // Audio events

  playing (event) {
  }

  pause (event) {
  }

  ended (event) {
    const { dispatch, currentEpisode } = this.props
    dispatch(ended(currentEpisode))
  }

  timeupdate (event) {
    const { dispatch, currentEpisode } = this.props
    dispatch(elapsed({
      episode: currentEpisode,
      time: event.target.currentTime
    }))
  }

  loadstart (event) {
    const { dispatch, currentEpisode } = this.props
    dispatch(setDuration({
      episode: currentEpisode,
      duration: 0
    }))
  }

  loadedmetadata (event) {
    const { dispatch, currentEpisode } = this.props
    dispatch(setDuration({
      episode: currentEpisode,
      duration: event.target.duration
    }))
  }

  render () {
    const DEBUG = false
    const { dispatch, currentEpisode } = this.props

    return <div>
      {DEBUG && <div>
        <button onClick={() => dispatch(play())}>Play</button>
        <button onClick={() => dispatch(pause())}>Pause</button>
        <button onClick={() => dispatch(prev())}>Prev</button>
        <button onClick={() => dispatch(next())}>Next</button>
      </div>}

      <audio ref='player'
        controls={DEBUG}
        src={currentEpisode && currentEpisode.audio}
      />
    </div>
  }
}

export default connect(stateToProps)(Player)

