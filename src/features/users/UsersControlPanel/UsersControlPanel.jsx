// Vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdPersonAdd } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

// Components
import UsersList, { UsersListItem } from '../UsersList';
import TopBar from '../TopBar';
import UserSearchForm from '../UserSearchForm';
import DropDown from '../../../ui/DropDown';
import Button from '../../../ui/Button';
import UsersOffsetControls from '../UsersOffsetControls';
import TopBarSection from '../TopBarSection';

// State
import {
  selectUsersIdsByOffset, usersActions,
} from '../_usersSlice_';

// Styles
import styles from './UsersControlPanel.module.css';

const UsersControlPanel = () => {
  const { offset } = useParams();
  const usersIds = useSelector((state) => selectUsersIdsByOffset(state, offset));
  const currentRole = useSelector((state) => state.users.currentRole);
  const dispatch = useDispatch();

  const headers = [
    'ФИО', 'Email', 'Пароль',
    'Телефон', 'Роль', 'Дата регистрации',
    'Дата последенего изменения',
  ];

  const roles = ['Все', 'Клиент', 'Партнёр', 'Админ'];

  useEffect(() => {
    dispatch(usersActions.getAllUsers());
  }, []);

  const handlerRoleChange = (value) => {
    if (value === 'Все') {
      dispatch(usersActions.getAllUsers());
    } else {
      dispatch(usersActions.getFilteredUsers({ field: 'role', value }));
    }
  };

  const renderedUsers = usersIds.map((user) => (
    <UsersListItem
      key={user}
      userId={user}
    />
  ));

  return (
    <div className={styles.container}>
      <TopBar className={styles['top-bar']}>
        <UserSearchForm />
        <TopBarSection>
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
        </TopBarSection>
      </TopBar>
      <UsersList headers={headers}>
        {renderedUsers}
      </UsersList>
      <UsersOffsetControls className={styles['offset-controls']} />
    </div>
  );
};

export default UsersControlPanel;
