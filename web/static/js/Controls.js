export const PLAY = 'controls/PLAY'
export function play () {
  return { type: PLAY }
}

export const PAUSE = 'controls/PAUSE'
export function pause () {
  return { type: PAUSE }
}

export const PREV = 'controls/PREV'
export function prev () {
  return { type: PREV }
}

export const NEXT = 'controls/NEXT'
export function next () {
  return { type: NEXT }
}

export default class Controls {
  constructor (store) {
    this.dispatch = store.dispatch

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  play () { this.dispatch(play()) }
  pause () { this.dispatch(pause()) }
  next () { this.dispatch(next()) }
  prev () { this.dispatch(prev()) }
}
