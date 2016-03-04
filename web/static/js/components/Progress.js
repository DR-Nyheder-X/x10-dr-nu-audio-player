import React, { PropTypes } from 'react'
import './Progress.css'

export default function Progress ({ percent, children }) {
  percent = parseFloat(percent || 0, 10)

  return <div className='Progress'>
    <div className='Progress-duration'>{children}</div>
    <input type="range" min="1" max="100" value={percent} />
    <div className='Progress-bar' style={{width: percent + '%'}}></div>
  </div>
}

Progress.propTypes = {
  children: PropTypes.node,
  percent: PropTypes.number
}
