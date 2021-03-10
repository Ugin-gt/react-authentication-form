import React from 'react';
import cx from 'classnames';
import { ErrorMessage, useField } from 'formik';
import styles from './Input.module.scss';

const Input = props => {
  const [field, meta,] = useField(props.name);

  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });

  return (
    <label>
      <input
        type='text'
        className={classNames}
        {...field}
        {...props}
      />
      <ErrorMessage
        component='div'
        className={styles.arrow}
        name={field.name}
      />
    </label>
  );
};

export default Input;
