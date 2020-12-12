// Vendors
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdPersonAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Components
import UsersList, { UsersListItem } from '../UsersList';
import TopBar from '../TopBar';
import DropDown from '../../../ui/DropDown';
import Button from '../../../ui/Button';

// State
import {
  selectUsersIds, usersActions,
} from '../_usersSlice_';

// Styles
import styles from './UsersControlPanel.module.css';

const UsersControlPanel = () => {
  const users = useSelector(selectUsersIds);
  const currentRole = useSelector((state) => state.users.currentRole);
  const dispatch = useDispatch();

  const headers = [
    'ФИО', 'Email', 'Пароль',
    'Телефон', 'Роль', 'Дата регистрации',
    'Дата последенего изменения',
  ];

  const roles = ['Все', 'Клиент', 'Партнёр', 'Админ'];

  const handlerRoleChange = (value) => {
    if (value === 'Все') {
      dispatch(usersActions.getAllUsers());
    } else {
      dispatch(usersActions.getFilteredUsers({ field: 'role', value }));
    }
  };

  const renderedUsers = users.map((user) => (
    <UsersListItem
      key={user}
      userId={user}
    />
  ));

  return (
    <div className={styles.container}>
      <TopBar>
        <DropDown
          items={roles}
          onChange={handlerRoleChange}
          className={styles.roles}
          value={currentRole}
        />
        <Link to="/users/add">
          <Button
            title="Добавить пользователя"
            icon={<MdPersonAdd size="25" />}
          />
        </Link>
      </TopBar>
      <UsersList headers={headers}>
        {renderedUsers}
      </UsersList>
    </div>
  );
};

export default UsersControlPanel;
