import React from 'react';
import SignInForm from '../../components/SignInForm';
import styles from './SignIn.module.scss';
import {} from 'formik';

const SignIn = props => {
  console.log(props);
  const onSubmit = values => console.log(values);
  return (
    <div className = {styles.signin}>
      <h1 className = {styles.header} > Login to your account </h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignIn;
