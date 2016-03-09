import React, { PropTypes } from 'react'
import classname from 'classname'
import './Progress.css'

export default function Progress ({ total, position, children, color, big, onChange }) {
  position = position || 0
  const cls = classname('Progress', {
    'is-big': big
  }, color && `Progress--${color}`)
  const percent = Math.ceil(position / total * 100) || 0

  return <div className={cls}>
    <div className='Progress-duration'>{children}</div>
    <input type='range' min='0' max={total} value={position} onChange={onChange} />
    <div className='Progress-bar' style={{width: percent + '%'}}></div>
  </div>
}

Progress.propTypes = {
  children: PropTypes.node,
  percent: PropTypes.number
}
