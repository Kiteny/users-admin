import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({ title }) => {
  const rendredTitle = title ? `${title}:` : '';

  return (
    <div>
      <p className={styles.title}>{rendredTitle}</p>
      <input className={styles.input} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
};

Input.defaultProps = {
  title: '',
};

export default Input;
