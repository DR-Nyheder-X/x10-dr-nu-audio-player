import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Tabs from './Tabs'

const stateToProps = (state) => ({
  path: state.routing.locationBeforeTransitions.pathname
})

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired
  }

  render () {
    const { path } = this.props

    return <div className='App'>
      <Tabs path={path} />
      {this.props.children}
    </div>
  }
}

export default connect(stateToProps)(App)
