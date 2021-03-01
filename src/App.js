import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Header from './components/Header'
// import SingUp from './pages/SingUp';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={SignIn} />
          {/* <Route path='/' component={SingUp} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
