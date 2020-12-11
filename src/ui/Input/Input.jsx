import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({ title, type }) => {
  const rendredTitle = title ? `${title}:` : '';

  return (
    <div>
      <p className={styles.title}>{rendredTitle}</p>
      <input className={styles.input} type={type} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  type: 'text',
};

export default Input;
