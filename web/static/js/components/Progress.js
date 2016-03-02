import React, { Component } from 'react'
import './Progress.css'

export default class Progress extends Component {
  render () {

    return <div className='Progress is-playing'>
      <div className='Progress-rail'>
        <div className='Progress-bar' style={{width: '34%'}}></div>
      </div>
      <div className='Progress-duration'>2 min</div>
    </div>
  }
}

module.exports = Progress
