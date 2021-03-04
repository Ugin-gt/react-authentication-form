import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../logo/logo.png';
import {Link} from 'react-router-dom';

const Header = props => {
  console.log(props);
  const { pathname, ...rest } = props;

  return (
      <div>
        <div className={styles.container}>
          <img src={logo} alt={'logo'} />
          <Link className={styles.onDiv} to='/'>Signup</Link>
          <Link className={styles.onDiv} to='/sign-up'>Login</Link>
          {/* <Link className={styles.onDiv} {pathname ='/' ? {to='/'>Signup<'Signup'  >
            {pathname ={ }  ? 'Signup' : 'Login'} */}
        </div>
      </div>
    );
  
}

export default Header;
