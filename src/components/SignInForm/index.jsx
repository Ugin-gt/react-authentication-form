import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_IN_SCHEMA } from '../../utils/validationSchemas';
import styles from './SignInForm.module.scss';
import Input from '../Input';

const SignInForm = props => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {formProps => {
        return (
          <Form className={styles.form}>
            <Input name='email' placeholder='Email address' autoFocus />

            <Input name='password' type='password' placeholder='Password' />

            <label className={styles.label} htmlFor='rememberMe'>
              <input
                className={styles.checkbox}
                id='rememberMe'
                type='checkbox'
              />
              Remember Me
            </label>
            <Field className={styles.submit} type='submit' value='LOGIN' />
          </Form>
        );
      }}
    </Formik>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
