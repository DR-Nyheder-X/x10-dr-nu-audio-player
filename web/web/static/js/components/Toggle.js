import React, { PropTypes } from 'react'
import classname from 'classname'
import './Toggle.css'

export default function Toggle ({ checked, onClick, children }) {
  const cls = classname('Toggle', {
    'is-on': checked,
    'is-off': !checked
  })

  return <div className={cls} onClick={onClick}>
    <label>{children}</label>
    <div className='Toggle-switch'><span></span></div>
  </div>
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
