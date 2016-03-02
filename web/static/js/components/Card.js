import React, { PropTypes } from 'react'
import classname from 'classname'
import AudioControls from './AudioControls'
import Progress from './Progress'
import './Card.css'

export default function Card ({
  big,
  duration,
  elapsed,
  episode,
  onNext,
  onPlayPause,
  onPrev,
  playing
}) {
  const cls = classname('Card', {
    'is-big': big
  })

  return <div className={cls}>
    <div className='Card-inner'>
      <div className='Card-content'>
        <AudioControls {...{playing, onPlayPause, onPrev, onNext}} />
        <div className='Card-title'>
          {episode.headline}
        </div>
        <Progress percent={duration && Math.ceil(elapsed / duration * 100)}>
          {episode.duration}
        </Progress>
      </div>
    </div>
  </div>
}

Card.propTypes = {
  big: PropTypes.bool,
  elapsed: PropTypes.number,
  episode: PropTypes.object.isRequired,
  onNext: PropTypes.func,
  onPlayPause: PropTypes.func,
  onPrev: PropTypes.func,
  playing: PropTypes.bool
}
