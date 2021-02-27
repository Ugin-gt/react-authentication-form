import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import Input from '../Input';
import { SING_IN_SCHEMA } from '../../utils';

const SingInForm = props => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SING_IN_SCHEMA}
    >
      {formProps => {
        return (
          <Form>
            <Field name='email' />
            {fieldProps => <Input {...fieldProps} placeholder='Enter Email' />}
            <Field />

            <Field name='password' />
            {fieldProps => (
              <Input
                {...fieldProps}
                type='password'
                placeholder='Enter Password'
              />
            )}
            <Field />

            <Field type='submit' value='Submit Form' />
          </Form>
        );
      }}
    </Formik>
  );
};

SingInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SingInForm;
