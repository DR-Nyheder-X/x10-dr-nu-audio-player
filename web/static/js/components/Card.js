import React, { PropTypes } from 'react'
import classname from 'classname'
import AudioControls from './AudioControls'
import Progress from './Progress'
import './Card.css'

export default function Card ({ big, children }) {
  const cls = classname('Card', {
    'Card-isBig': big
  })

  return <div className={cls}>
    <div className='Card-inner'>
      <div className='Card-content'>
        <div className='Card-controlsAndTitle'>
          <AudioControls />

          <div className='Card-title'>
            {children}
          </div>
        </div>

        <Progress />
      </div>
    </div>
  </div>
}

Card.propTypes = {
  big: PropTypes.bool
}
