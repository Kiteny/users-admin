import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = forwardRef(({
  title, type, name, id, errorMessage, placeholder,
}, ref) => {
  const renderedTitle = title ? `${title}:` : '';
  const renderedErrorMessage = errorMessage
    ? <span className={styles.error}>{errorMessage}</span>
    : null;

  return (
    <div className={styles.wrraper}>
      <p className={styles.title}>{renderedTitle}</p>
      <input
        className={styles.input}
        type={type}
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
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
};

Input.defaultProps = {
  title: '',
  type: 'text',
  name: '',
  id: '',
  errorMessage: '',
  placeholder: '',
};

export default Input;
