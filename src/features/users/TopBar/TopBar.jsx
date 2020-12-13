import React from 'react';
import PropTypes from 'prop-types';

import styles from './TopBar.module.css';

const TopBar = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>
    {children}
  </div>
);

TopBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

TopBar.defaultProps = {
  children: [],
  className: '',
};

export default TopBar;
