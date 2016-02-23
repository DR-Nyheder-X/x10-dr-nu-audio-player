import EventEmitter from 'eventemitter3'

class Controls extends EventEmitter {
  constructor () {
    super()

    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  play () { this.emit('play') }
  pause () { this.emit('pause') }
  next () { this.emit('next') }
  prev () { this.emit('prev') }
}

const controls = window.Controls = new Controls()
export default controls
