import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import List from './components/List'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
