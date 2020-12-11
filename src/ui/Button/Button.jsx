import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({
  title, icon, fulfilled, type, className,
}) => {
  const buttonStyles = icon ? styles.buttonWithIcon : styles.button;
  const fulfilledStyles = fulfilled ? styles.fulfilled : '';

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={`${buttonStyles} ${fulfilledStyles} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  fulfilled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  title: '',
  icon: null,
  fulfilled: false,
  type: 'button',
  className: '',
};

export default Button;
