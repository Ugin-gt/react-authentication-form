import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { SIGN_IN_SCHEMA } from '../../utils/validationSchemas';
import Input from '../Input';

const SingInForm = props => {
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
          <Form>
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

            <Field type='submit' value='LOGIN' />
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
