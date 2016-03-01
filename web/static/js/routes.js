/* global __DEV */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import PlayerPage from './components/PlayerPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PlayerPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)

