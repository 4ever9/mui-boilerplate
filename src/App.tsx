import React from 'react'
import {Box, Paper} from '@mui/material'
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </>
  )
}

export default App
