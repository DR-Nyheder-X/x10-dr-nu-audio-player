import React, { PropTypes } from 'react'
import classname from 'classname'
import './Progress.css'

export default function Progress ({ percent, children, color }) {
  percent = parseFloat(percent || 0, 10)

  const cls = classname('Progress', color && `Progress--${color}`)

  return <div className={cls}>
    <div className='Progress-duration'>{children}</div>
    <input type='range' min='1' max='100' value={percent} />
    <div className='Progress-bar' style={{width: percent + '%'}}></div>
  </div>
}

Progress.propTypes = {
  children: PropTypes.node,
  percent: PropTypes.number
}
