import StoreProvider from 'components/context/Provider'
import RouterPrivate from 'components/routes/Private/private'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RouterPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot
