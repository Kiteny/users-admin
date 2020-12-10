import React from 'react';
import PropTypes from 'prop-types';

import styles from './UsersList.module.css';

const UsersList = ({ headers, children }) => {
  const renderedHeaders = ['', '', ...headers].map((header, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <th key={header + index} className={styles['title-cell']}>
      {header}
    </th>
  ));

  return (
    <div className={styles.wrraper}>
      <table className={styles.container}>
        <thead className={styles.title}>
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
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UsersList.defaultProps = {
  children: [],
};

export default UsersList;
