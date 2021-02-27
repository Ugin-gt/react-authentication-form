import React from 'react';
import SingInForm from '../../components/SingInForm';
import {} from 'formik'

const SingIn = props => {
  const onSubmit = values => console.log(values);
  return (
    <div>
      {/* <Header /> */}
      <h1> Login to your account </h1>
      <SingInForm  onSubmit={onSubmit}/>
    </div>
  );
};

export default SingIn;
