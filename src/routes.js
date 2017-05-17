import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import NotFoundPage from './components/NotFoundPage'

const routes = (
  <Route>
    <Route path="/" component={ Main } />
    <Route path="*" component={ NotFoundPage } />
  </Route>
)

export default routes
