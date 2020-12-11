import React from 'react';
import PropTypes from 'prop-types';

import styles from './TopBar.module.css';

const TopBar = ({ children }) => <div className={styles.container}>{children}</div>;

TopBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TopBar.defaultProps = {
  children: [],
};

export default TopBar;
