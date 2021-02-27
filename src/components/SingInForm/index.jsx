import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

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
            <Field type='password' name='password' />
            <Field type='submit' value='Submit' />
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
