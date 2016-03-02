import React, { PropTypes } from 'react'
import './Progress.css'

export default function Progress ({ percent, children }) {
  percent = parseFloat(percent || 0, 10)

  return <div className='Progress isPlaying'>
    <div className='Progress-rail'>
      <div className='Progress-bar' style={{width: percent + '%'}}></div>
    </div>
    <div className='Progress-duration'>{children}</div>
  </div>
}

Progress.propTypes = {
  children: PropTypes.node,
  percent: PropTypes.number
}
