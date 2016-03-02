/* global __DEV */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import PlayerPage from './components/PlayerPage'
import CategoriesPage from './components/CategoriesPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PlayerPage} />
    <Route path='/categories' component={CategoriesPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)

