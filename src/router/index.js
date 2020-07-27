import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

export default () => (
  <Switch>
    {renderRoutes(routes)}
  </Switch>
)
