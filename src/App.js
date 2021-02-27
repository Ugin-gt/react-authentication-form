import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import SingIn from './pages/SingIn';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SingIn} />
          {/* <Route path='/sing-up' component={} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App
