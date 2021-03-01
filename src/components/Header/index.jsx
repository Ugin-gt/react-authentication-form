import React, { Component } from 'react';
import styles from './Header.module.scss';
import logo from '../../logo/logo.png';
import SignIn from '../../pages/SignIn'
// import SignUp from '../../pages/SignUp';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = { page: true };
  }
  switchPage = () => {
    this.setState(state => {
      return {
        page: !state.page,
        //  ? SignUp : SignIn
      };
    });
  };

  render () {
    const { page } = this.state;

    return (
      <div>
        <div className={styles.container}>
          <img src={logo} alt={'logo'} />
          <div className={styles.onDiv} onClick={this.switchPage}>
            {page ? 'Signup' : 'Login'}

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
