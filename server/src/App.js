import React from 'react'
import './App.css';
import { Router , Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { history , PrivateRoute} from './@helpers'
import BotonAgregar from './Components/BotonAgregar'
import { Register , Login  } from './Components'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
        <PrivateRoute path="/register" component={Register}>
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App;
