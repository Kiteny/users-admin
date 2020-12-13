// Vendors
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

// State
import { selectUserById, usersActions } from '../_usersSlice_';

// Styles
import styles from './UsersListItem.module.css';

const UsersListItem = ({ userId }) => {
  const {
    fio, email, password, phone, role, dateReg, dateLastEdit,
  } = useSelector((state) => selectUserById(state, userId));

  const currentRole = useSelector((state) => state.users.currentRole);
  const dispatch = useDispatch();
  const history = useHistory();

  const formatDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const formattedDateReg = new Intl.DateTimeFormat('ru', formatDate)
    .format(
      new Date(dateReg),
    );
  const formattedDateLastEdit = new Intl.DateTimeFormat('ru', {
    ...formatDate,
    hour: 'numeric',
    minute: 'numeric',
  })
    .format(
      new Date(dateLastEdit),
    );

  const handlerDeleteClick = () => {
    dispatch(usersActions.deleteUser(userId));
  };

  const handlerEditClick = () => {
    history.push(`/users/edit/${userId}`);
  };

  if (currentRole !== 'Все' && currentRole !== role) {
    return null;
  }

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>
        <button type="button" onClick={handlerDeleteClick}>
          <FaTrashAlt size="20" />
        </button>
      </td>
      <td className={styles.cell}>
        <button type="button" onClick={handlerEditClick}>
          <FaEdit size="20" />
        </button>
      </td>
      <td className={styles.cell}>{fio}</td>
      <td className={styles.cell}>{email}</td>
      <td className={styles.cell}>{password}</td>
      <td className={styles.cell}>{phone}</td>
      <td className={styles.cell}>{role}</td>
      <td className={styles.cell}>{formattedDateReg}</td>
      <td className={styles.cell}>{formattedDateLastEdit}</td>
    </tr>
  );
};

UsersListItem.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UsersListItem;
