import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import styles from './SignUp.module.scss';
import {} from 'formik'

const SignUp = props => {
  console.log(props);
  const onSubmit = values => console.log(values);
  return (
    <div className={styles.signup}>
      <h1 className={styles.header}> Create an account </h1>
      <h3 className={styles.header2}> We always keep your name and email address private. </h3>
      < SignUpForm  onSubmit={onSubmit}/>
    </div>
  );
};

export default SignUp;