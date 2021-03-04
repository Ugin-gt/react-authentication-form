import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import styles from './SignUpForm.module.scss';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas';
import Input from '../Input';

const SignUpForm = props => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
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
              <Field name='firstName'>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='First Name' />
                )}
              </Field>

              <Field name='lastName'>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='Last Name' />
                )}
              </Field>
            </div>

            <div className={styles.signUpForm}>
              <Field name='displayName'>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='Display Name' />
                )}
              </Field>

              <Field name='email'>
                {fieldProps => (
                  <Input {...fieldProps} placeholder='Enter Email' />
                )}
              </Field>
            </div>

            <div className={styles.signUpForm}>
              <Field name='password'>
                {fieldProps => (
                  <Input
                    {...fieldProps}
                    type='password'
                    placeholder='Password'
                  />
                )}
              </Field>
              <Field name='passwordConfirmation'>
                {fieldProps => (
                  <Input
                    {...fieldProps}
                    type='password'
                    placeholder='Password Confirmation'
                  />
                )}
              </Field>
            </div>

            <div className={styles.clientRadio}>
              <input name='joinAsClient' type='radio'></input>
              <label for='joinAsClient' className={styles.joinAs}>
                Join As a Buyer
                <span className={styles.joinAsDesc}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </label>
            </div>
            <div className={styles.clientRadio}>
              <input name='joinAsCreative' type='radio'></input>
              <label for='joinAsCreative' className={styles.joinAs}>
                Join As a Creative or Marketplace Seller
                <span className={styles.joinAsDesc}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </span>
              </label>
            </div>
            <Field
              className={styles.createAcc}
              type='createAcc'
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
