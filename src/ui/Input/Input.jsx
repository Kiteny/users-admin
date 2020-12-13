// Vendors
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Input.module.css';

const Input = forwardRef(({
  title, type, name, id, errorMessage, placeholder, value, onChange,
}, ref) => {
  const renderedTitle = title ? (
    <p className={styles.title}>
      {title}
      :
    </p>
  ) : null;
  const renderedErrorMessage = errorMessage
    ? <span className={styles.error}>{errorMessage}</span>
    : null;

  return (
    <div className={styles.wrraper}>
      {renderedTitle}
      <input
        className={styles.input}
        type={type}
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        {...(ref || { value })}
        onChange={onChange}
      />
      {renderedErrorMessage}
    </div>
  );
});

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  title: '',
  type: 'text',
  name: '',
  id: '',
  errorMessage: '',
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default Input;
