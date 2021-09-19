import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import State from './page/State'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/state'>
          <State />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
