import React, { Component } from 'react'

export default class Tabs extends Component {
  render () {

    return <div className='Tabs'>
      <div className='Tabs-inner'>
        <div className='Tabs-tab Tabs-tab--news'><i></i> Nyheder</div>
        <div className='Tabs-tab Tabs-tab--subjects'><i></i> Emner</div>
      </div>
    </div>
  }
}

module.exports = Tabs
