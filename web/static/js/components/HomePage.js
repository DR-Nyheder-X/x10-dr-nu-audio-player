import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { get } from '../api'
import { register } from '../store'
import { resolve } from 'redux-simple-promise'

export const FETCH_EPISODES = 'home_page/FETCH_EPISODES'
export function fetchEpisodes () {
  return {
    type: FETCH_EPISODES,
    payload: { promise: get('/episodes') }
  }
}

const init = {
  items: []
}

export function reducer (state = init, action) {
  switch (action.type) {

    case resolve(FETCH_EPISODES):
      return { ...state, items: action.payload.data }

    default: return state
  }
}

register(reducer, 'episodes')

const stateToProps = (state) => ({
  episodes: state.episodes.items
})

class HomePage extends Component {
  componentDidMount () {
    this.props.dispatch(fetchEpisodes())
  }

  render () {
    const { episodes } = this.props

    return <div>
      <h1>Home</h1>
      {episodes.map((episode) => (
        <blockquote>{episode.headline}</blockquote>
      ))}
    </div>
  }
}

export default connect(stateToProps)(HomePage)
