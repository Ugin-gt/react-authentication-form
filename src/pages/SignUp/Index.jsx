import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import {} from 'formik'

const SignUp = props => {
  const onSubmit = values => console.log(values);
  return (
    <div>
      <h1> Create an account </h1>
      <h3> We always keep your name and email address private. </h3>
      <SignUpForm  onSubmit={onSubmit}/>
    </div>
  );
};

export default SignUp;