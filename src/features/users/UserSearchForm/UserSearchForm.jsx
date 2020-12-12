import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { usersActions } from '../_usersSlice_';

import styles from './UserSearchForm.module.css';

const UserSearchForm = ({ className }) => {
  const [value, setValue] = useState('');
  const currentRole = useSelector((state) => state.users.currentRole);
  const dispatch = useDispatch();

  const handlerSearch = () => {
    dispatch(usersActions.search(value));
  };

  const handlerReset = () => {
    if (currentRole === 'Все') {
      dispatch(usersActions.getAllUsers());
    } else {
      dispatch(usersActions.getFilteredUsers({ field: 'role', value: currentRole }));
    }

    setValue();
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <Input placeholder="Email или телефон" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button title="Найти" onClick={handlerSearch} />
      <Button title="Сброс" onClick={handlerReset} />
    </div>
  );
};

UserSearchForm.propTypes = {
  className: PropTypes.string,
};

UserSearchForm.defaultProps = {
  className: '',
};

export default UserSearchForm;
