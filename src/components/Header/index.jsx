import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = props => {
  const { pathname, ...rest } = props;

  return (
    <div>
      <div className={styles.container}>
        <a href='https://www.squadhelp.com/'>
          <img src='/assets/images/logo.png' alt={'logo'} />
        </a>
        <Link className={styles.onDiv} to='/'>
          Login
        </Link>
        <Link className={styles.onDiv} to='/sign-up'>
          Signup
        </Link>
        {/* <Link className={styles.onDiv} to= { ? {'/'>Signup<'Signup'  >
            {pathname ='/' ? {'Signup' : 'Login'} */}
      </div>
    </div>
  );
};

export default Header;
