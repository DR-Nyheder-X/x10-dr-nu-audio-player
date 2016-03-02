import React, { PropTypes } from 'react'
import classname from 'classname'
import './Toggle.css'

export default function Toggle ({ checked, onClick, children }) {
  const cls = classname('Toggle', {
    'Toggle--isOn': checked,
    'Toggle--isOff': !checked
  })

  return <div className={cls} onClick={onClick}>
    <label>{children}</label>
    <svg width='13px' height='12px' viewBox='0 0 13 12'>
      {checked && <path transform='translate(-328.000000, -193.000000)' fill='#000000' d='M338.737295,193.490678 L332.038809,201.339585 L334.204283,201.217697 L330.024498,197.309277 L327.975502,199.500536 L332.155287,203.408956 L333.301798,204.481032 L334.320761,203.287069 L341.019247,195.438162 L338.737295,193.490678 L338.737295,193.490678 Z'></path>}
    </svg>
  </div>
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
