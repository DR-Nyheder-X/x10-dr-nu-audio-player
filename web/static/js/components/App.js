import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { register } from '../store'
import Player, { ENDED } from './Player'
import { PREV, NEXT } from '../Controls'
import './App.css'
import Tabs from './Tabs'

import {
  init as playerInit,
  reducer as playerReducer
} from './Player'
import {
  init as playlistInit,
  reducer as playlistReducer
} from './PlaylistPage'

const init = {
  player: playerInit,
  playlist: playlistInit
}

function navigate (state, direction) {
  const { episodes } = state.playlist
  const { currentEpisode } = state.player
  const index = episodes.indexOf(currentEpisode)
  const newState = { ...state }
  newState.player.currentEpisode =
    episodes[index + direction] || currentEpisode
  return newState
}

function reducer (state = init, action) {
  let newState = {
    player: playerReducer(state.player, action),
    playlist: playlistReducer(state.playlist, action)
  }

  switch (action.type) {
    case NEXT: return navigate(state, 1)
    case PREV: return navigate(state, -1)
    case ENDED: return navigate(state, 1)
    default: return newState
  }
}

register(reducer, 'app')

const stateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname
})

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired
  }

  render () {
    const { path } = this.props

    return <div className='App'>
      <Tabs path={path} />
      <Player />
      {this.props.children}
    </div>
  }
}

export default connect(stateToProps)(App)
