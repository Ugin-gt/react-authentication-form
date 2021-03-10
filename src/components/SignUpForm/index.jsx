import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import styles from './SignUpForm.module.scss';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas';
import Input from '../Input';
// import RadioForm from '../RadioForm';

const SignUpForm = props => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {formProps => {
        return (
          <Form className={styles.form}>
            <div className={styles.signUpForm}>
              <Input name='firstName' placeholder='First Name' autoFocus />

              <Input name='lastName' placeholder='Last Name' />
            </div>
            <div className={styles.signUpForm}>
              <Input name='displayName' placeholder='Display Name' />

              <Input name='email' placeholder='Enter Email' />
            </div>
            <div className={styles.signUpForm}>
              <Input name='password' type='password' placeholder='Password' />

              <Input
                name='passwordConfirmation'
                type='password'
                placeholder='Password Confirmation'
              />
            </div>
            <div className={styles.clientRadio}>
              <Input name='role' value='buyer' id='buyer' type='radio' />

              <label htmlFor='buyer' className={styles.joinAs}>
                Join As a Buyer
                <span className={styles.joinAsDesc}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </label>
            </div>
            <div className={styles.clientRadio}>
              <Input name='role' value='creative' id='creative' type='radio' />

              <label htmlFor='creative' className={styles.joinAs}>
                Join As a Creative or Marketplace Seller
                <span className={styles.joinAsDesc}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </span>
              </label>
            </div>
           
            <Field
              className={styles.createAcc}
              type='submit'
              value='Create account'
            />
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
