import React from 'react';
import cx from 'classnames';
import { ErrorMessage } from 'formik';
import styles from './Input.module.scss';

const Input = props => {
  console.log(props);
  const { field, meta, form, ...rest } = props;

  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });

  return (  
    <>
      <label classname={styles.input}>

        <input {...field} type='text' className={classNames} {...rest} />

        <ErrorMessage component='div' name={field.name} />
      </label>
    </>
  );
};

export default Input;
