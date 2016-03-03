import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resolve } from 'redux-simple-promise'
import {
  play, pause, prev, next
} from '../Controls'
import Card from './Card'
import { get } from '../api'

export const FETCH_EPISODES = 'playlist/FETCH_EPISODES'
export function fetchEpisodes () {
  return {
    type: FETCH_EPISODES,
    payload: { promise: get('/episodes') }
  }
}

export const init = {
  episodes: []
}

export const reducer = function playlistReducer (state = init, action) {
  switch (action.type) {

    case resolve(FETCH_EPISODES):
      return { ...state, episodes: action.payload.data }

    default: return state
  }
}

const stateToProps = (state) => ({
  episodes: state.app.playlist.episodes,
  currentEpisode: state.app.player.currentEpisode,
  playing: state.app.player.playing,
  elapsed: state.app.player.elapsed,
  duration: state.app.player.duration
})

class PlaylistPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentEpisode: PropTypes.object,
    playing: PropTypes.bool.isRequired,
    elapsed: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.handlePlayPause = this.handlePlayPause.bind(this)
  }

  componentDidMount () {
    if (this.props.episodes.length === 0) {
      this.props.dispatch(fetchEpisodes())
    }
  }

  handlePlayPause (episode) {
    const { dispatch, playing, currentEpisode } = this.props

    if (episode.id !== currentEpisode.id) {
      dispatch(play(episode))
    } else {
      dispatch(playing ? pause() : play())
    }
  }

  render () {
    const {
      dispatch,
      duration,
      episodes,
      playing,
      currentEpisode,
      elapsed
    } = this.props

    return <div id='PlaylistPage'>
      {episodes.map((episode) => (
        <Card key={episode.id}
          big={episode.id === currentEpisode.id}
          playing={episode.id === currentEpisode.id && playing}
          episode={episode}
          elapsed={elapsed[episode.id]}
          duration={duration[episode.id]}
          onPlayPause={() => this.handlePlayPause(episode)}
          onPrev={() => dispatch(prev())}
          onNext={() => dispatch(next())}
        />
      ))}
    </div>
  }
}

export default connect(stateToProps)(PlaylistPage)
