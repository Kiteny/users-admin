import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ title, icon }) => {
  const buttonStyles = icon ? styles.buttonWithIcon : styles.button;

  return (
    <button type="button" className={buttonStyles}>
      <span className={styles.icon}>{icon}</span>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  title: '',
  icon: null,
};

export default Button;
