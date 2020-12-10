import React from 'react';

import UsersList, { UsersListItem } from '../UsersList';
import styles from './UsersControlPanel.module.css';

const UsersControlPanel = () => {
  const headers = [
    'ФИО', 'Email', 'Пароль',
    'Телефон', 'Роль', 'Дата регистрации',
    'Дата последенего изменения',
  ];

  const users = [
    {
      id: '1',
      fio: 'Иванов Ивна Иванович',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Client',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '2',
      fio: 'Иванов2 Ивна Иванович',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Client',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '3',
      fio: 'Иванов2 Ивна Иванович',
      email: 'dfdsfd@gmail.com',
      password: 'qwertydsfsdfdsfsdfdsfds',
      phone: '+77777777777',
      role: 'Client',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '4',
      fio: 'Иванов2 Ивна Иванович',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Client',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
  ];

  const renderedUsers = users.map((user) => (
    <UsersListItem
      key={user.id}
      {...user}
    />
  ));

  return (
    <div className={styles.container}>
      <UsersList headers={headers}>
        {renderedUsers}
      </UsersList>
    </div>
  );
};

export default UsersControlPanel;
