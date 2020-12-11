import React, { useState } from 'react';
import { MdPersonAdd } from 'react-icons/md';

import UsersList, { UsersListItem } from '../UsersList';
import TopBar from '../TopBar';
import DropDown from '../../../ui/DropDown';
import styles from './UsersControlPanel.module.css';

const UsersControlPanel = () => {
  const [selectedRole, setSelectedRole] = useState('Все');

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
      role: 'Админ',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '3',
      fio: 'Иванов2121 Ивна Иванович',
      email: 'dfdsfd@gmail.com',
      password: 'qwertydsfsdfdsfsdfdsfds',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '4',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '5',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '6',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '7',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '8',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '9',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '10',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '11',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '12',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '13',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '14',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '15',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '16',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '17',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
    {
      id: '18',
      fio: 'Иванов2 Ивна ddsd',
      email: 'dfdsfd@gmail.com',
      password: 'qwerty',
      phone: '+77777777777',
      role: 'Клиент',
      dateReg: '23.12.2229',
      dateLastEdit: '23.12.2229',
    },
  ];

  const roles = ['Все', 'Клиент', 'Партнёр', 'Админ'];

  const filterdUsers = users.filter((user) => user.role === selectedRole || selectedRole === 'Все');

  const handlerRoleChange = (id) => {
    setSelectedRole(roles[id]);
  };

  const renderedUsers = filterdUsers.map((user) => (
    <UsersListItem
      key={user.id}
      {...user}
    />
  ));

  return (
    <div className={styles.container}>
      <TopBar>
        <DropDown items={roles} onChange={handlerRoleChange} />
        <button type="button">
          <MdPersonAdd size="28" />
        </button>
      </TopBar>
      <UsersList headers={headers}>
        {renderedUsers}
      </UsersList>
    </div>
  );
};

export default UsersControlPanel;
