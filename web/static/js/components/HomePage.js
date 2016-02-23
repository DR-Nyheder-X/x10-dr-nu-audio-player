import React, { Component } from 'react'
import { Link } from 'react-router'

export default class HomePage extends Component {
  render () {
    return <div>
      <h1>Home</h1>
      <Link to='/kitchensink'>
        <img src='/images/sink.png' width='85' />
      </Link>
    </div>
  }
}
