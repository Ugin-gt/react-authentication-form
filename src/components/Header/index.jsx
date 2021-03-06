import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Header = props => {
  const switchPage = location => {
    if (location.pathname === '/') {
      return (
        <Link className={styles.btnLink} to='/sign-up'>
          Signup
        </Link>
      );
    }
    return (
      <Link className={styles.btnLink} to='/'>
        Login
      </Link>
    );
  };

  return (
    <div>
      <div className={styles.container}>
        <a href='https://www.squadhelp.com/'>
          <img src='/assets/images/logo.png' alt={'logo'} />
        </a>
        <div>{switchPage(useLocation())}</div>
      </div>
    </div>
  );
};

export default Header;
