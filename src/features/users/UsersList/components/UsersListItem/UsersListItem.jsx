import React from 'react';
import PropTypes from 'prop-types';

import styles from './UsersListItem.module.css';

const UsersListItem = ({
  fio, email, password, phone, role, dateReg, dateLastEdit,
}) => (
  <tr className={styles.row}>
    <td className={styles.cell}>{fio}</td>
    <td className={styles.cell}>{email}</td>
    <td className={styles.cell}>{password}</td>
    <td className={styles.cell}>{phone}</td>
    <td className={styles.cell}>{role}</td>
    <td className={styles.cell}>{dateReg}</td>
    <td className={styles.cell}>{dateLastEdit}</td>
  </tr>
);

UsersListItem.propTypes = {
  fio: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  phone: PropTypes.string,
  role: PropTypes.string,
  dateReg: PropTypes.string,
  dateLastEdit: PropTypes.string,
};

UsersListItem.defaultProps = {
  fio: '',
  email: '',
  password: '',
  phone: '',
  role: '',
  dateReg: '',
  dateLastEdit: '',
};

export default UsersListItem;
