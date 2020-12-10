import React from 'react';
import PropTypes from 'prop-types';

import styles from './UsersList.module.css';

const UsersList = ({ headers, children }) => {
  const renderedHeaders = headers.map((header) => (
    <th className={styles['title-cell']} key={header}>{header}</th>
  ));

  return (
    <div className={styles.wrraper}>
      <table className={styles.container}>
        <thead>
          <tr className={styles['title-row']}>
            {renderedHeaders}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

UsersList.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(),
    PropTypes.node,
  ]),
};

UsersList.defaultProps = {
  children: [],
};

export default UsersList;
