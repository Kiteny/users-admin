import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { usersActions } from '../_usersSlice_';

import styles from './UserSearchForm.module.css';

const UserSearchForm = ({ className }) => {
  const [value, setValue] = useState('');
  const currentRole = useSelector((state) => state.users.currentRole);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerSearch = () => {
    dispatch(usersActions.search(value));
    history.push('/users/1');
  };

  const handlerReset = () => {
    if (currentRole === 'Все') {
      dispatch(usersActions.getAllUsers());
    } else {
      dispatch(usersActions.getFilteredUsers({ field: 'role', value: currentRole }));
    }

    setValue('');
    history.push('/users/1');
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <Input placeholder="Email или телефон" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button icon={<FaSearch size="20" />} onClick={handlerSearch} />
      <Button icon={<GrPowerReset size="20" />} onClick={handlerReset} />
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
