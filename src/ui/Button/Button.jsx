import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({
  title, icon, fulfilled, type, className, onClick,
}) => {
  const buttonStyles = icon ? styles.buttonWithIcon : styles.button;
  const fulfilledStyles = fulfilled ? styles.fulfilled : '';

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${buttonStyles} ${fulfilledStyles} ${className}`}
      onClick={onClick}
    >
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: '',
  icon: null,
  fulfilled: false,
  type: 'button',
  className: '',
  onClick: () => {},
};

export default Button;
