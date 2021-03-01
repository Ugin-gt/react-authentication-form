import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Header from './components/Header'
import SignUp from './pages/SignUp';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;