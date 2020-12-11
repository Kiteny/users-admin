import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = forwardRef(({
  title, type, name, id,
}, ref) => {
  const rendredTitle = title ? `${title}:` : '';

  return (
    <div>
      <p className={styles.title}>{rendredTitle}</p>
      <input
        className={styles.input}
        type={type}
        ref={ref}
        name={name}
        id={id}
      />
    </div>
  );
});

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  type: 'text',
  name: '',
  id: '',
};

export default Input;
