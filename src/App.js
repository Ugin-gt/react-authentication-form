import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SingIn from './pages/SingIn';
// import SingUp from './pages/SingUp';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Header/>
          <Route exact path='/' component={SingIn} />
          {/* <Route path='/' component={SingUp} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
