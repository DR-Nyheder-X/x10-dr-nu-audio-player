import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../store'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

import routes from '../routes'

const mount = document.getElementById('root')
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, mount
)
