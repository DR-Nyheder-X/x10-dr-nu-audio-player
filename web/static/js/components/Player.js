import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import Progress from './Progress'

const init = {
  elapsed: 0,
  total: 0
}

const mappedEvents = [
  'playing', 'pause', 'timeupdate', 'ended', 'loadstart', 'loadedmetadata'
]

export default class Player extends Component {
  static propTypes = {
    src: PropTypes.string,
    playing: PropTypes.bool,
    onPlaying: PropTypes.func,
    onPause: PropTypes.func,
    onEnded: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.updatePlayState = this.updatePlayState.bind(this)

    mappedEvents.forEach((event) => {
      this[event] = this[event].bind(this)
    })

    this.state = init
  }

  componentDidMount () {
    this.player = findDOMNode(this.refs.player)

    mappedEvents.forEach((event) => {
      this.player.addEventListener(event, this[event])
    })

    this.updatePlayState()
  }

  componentWillUnmount () {
    mappedEvents.forEach((event) => {
      this.player.removeEventListener(event, this[event])
    })
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

  // Audio events

  playing (event) {
    const { onPlaying } = this.props
    onPlaying && onPlaying(event)
  }

  pause (event) {
    const { onPause } = this.props
    onPause && onPause(event)
  }

  ended (event) {
    const { onEnded } = this.props
    onEnded && onEnded(event)
  }

  timeupdate (event) {
    this.setState({ elapsed: event.target.currentTime })
  }

  loadstart (event) {
    this.setState(init)
  }

  loadedmetadata (event) {
    this.setState({ total: event.target.duration })
  }

  render () {
    const { src } = this.props
    const { elapsed, total } = this.state

    return <div>
      <audio ref='player' src={src} />
      <Progress percent={total / 100 * elapsed}>
        {secondsToTime(total)}
      </Progress>
    </div>
  }
}

function secondsToTime (secs) {
  secs = Math.floor(secs)
  let hours = Math.floor(secs / 3600)
  let minutes = Math.floor((secs - (hours * 3600)) / 60)
  let seconds = secs - (hours * 3600) - (minutes * 60)

  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }

  let result = minutes + ':' + seconds

  if (hours > 0) {
    result = hours + ':' + result
  }

  return result
}
