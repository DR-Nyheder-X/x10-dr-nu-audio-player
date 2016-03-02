import React, { PropTypes } from 'react'
import classname from 'classname'
import AudioControls from './AudioControls'
import Progress from './Progress'
import './Card.css'

export default function Card ({ big, children }) {
  const cls = classname('Card', {
    'Card-isBig': big
  })

<<<<<<< HEAD
    return <div className='Card is-big'>
      <div className='Card-inner'>

        <div className='Card-content'>
          <AudioControls />
          <div className='Card-title'>
            {this.props.children}
          </div>
          <Progress />
=======
  return <div className={cls}>
    <div className='Card-inner'>
      <div className='Card-content'>
        <div className='Card-controlsAndTitle'>
          <AudioControls />

          <div className='Card-title'>
            {children}
          </div>
>>>>>>> origin/master
        </div>

        <Progress />
      </div>
    </div>
  </div>
}

Card.propTypes = {
  big: PropTypes.bool
}
