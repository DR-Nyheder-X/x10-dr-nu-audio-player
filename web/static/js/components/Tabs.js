import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './Tabs.css'
import classname from 'classname'

export default function Tabs ({ path }) {
  const cls = classname('Tabs', {
    'is-firstTabActive': path === '/',
    'is-secondTabActive': path === '/categories'
  })

  return <div className={cls}>
    <div className='Tabs-inner'>
      <Link to='/' className='Tabs-tab Tabs-tab--first'>
        <svg width='23px' height='19px' viewBox='0 0 23 19'>
          <g id='sound' fill='#7F7F7F'>
            <rect x='4' y='6' width='3' height='7' rx='1'></rect>
            <rect x='8' y='4' width='3' height='11' rx='1'></rect>
            <rect x='12' y='0' width='3' height='19' rx='1'></rect>
            <rect x='16' y='5' width='3' height='9' rx='1'></rect>
            <rect x='20' y='8' width='3' height='3' rx='1'></rect>
            <rect x='0' y='8' width='3' height='3' rx='1'></rect>
          </g>
        </svg>
        Nyheder
      </Link>
      <Link to='/categories' className='Tabs-tab Tabs-tab--second'>
        <svg width='17px' height='17px' viewBox='0 0 17 17'>
          <g id='subjects'>
            <circle className='a' fill='#7F7F7F' cx='2.5' cy='2.5' r='2.5'></circle>
            <circle className='a' fill='#7F7F7F' cx='8.5' cy='2.5' r='2.5'></circle>
            <circle className='a' fill='#7F7F7F' cx='14.5' cy='2.5' r='2.5'></circle>
            <circle className='a' fill='#7F7F7F' cx='2.5' cy='8.5' r='2.5'></circle>
            <circle className='a' fill='#7F7F7F' cx='8.5' cy='8.5' r='2.5'></circle>
            <circle className='b' fill='#ACACAC' cx='14.5' cy='8.5' r='2.5'></circle>
            <circle className='a' fill='#7F7F7F' cx='2.5' cy='14.5' r='2.5'></circle>
            <circle className='b' fill='#ACACAC' cx='8.5' cy='14.5' r='2.5'></circle>
            <circle className='a' fill='#7F7F7F' cx='14.5' cy='14.5' r='2.5'></circle>
          </g>
        </svg>
        Emner
      </Link>
      <div className='Tabs-highlighter'></div>
    </div>
  </div>
}

Tabs.propTypes = {
  path: PropTypes.string.isRequired
}
