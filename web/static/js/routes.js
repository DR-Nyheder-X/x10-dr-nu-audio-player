/* global __DEV */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import PlayerPage from './components/PlayerPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/player' component={PlayerPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)

