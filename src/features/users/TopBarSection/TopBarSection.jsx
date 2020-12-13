import React from 'react';
import PropTypes from 'prop-types';

import styles from './TopBarSection.module.css';

const TopBarSection = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

TopBarSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TopBarSection;
