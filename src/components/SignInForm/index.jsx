import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_IN_SCHEMA } from '../../utils/validationSchemas';
import styles from './SignInForm.module.scss';
import Input from '../Input';

const SignInForm = props => {
  console.log(props);
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
            <Field name='email'>
            {fieldProps => <Input {...fieldProps} placeholder='Email address' />}
            </Field >

            <Field name='password'>
            {fieldProps => (
              <Input
                {...fieldProps}
                type='password'
                placeholder='Password'
              />
            )}
            </Field>
            
            <input name='rememberMe' type = 'checkbox'/>
            <label className={styles.label} for='rememberMe'>Remember Me</label>
            <Field  className={styles.submit} type='submit' value='LOGIN' />
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
