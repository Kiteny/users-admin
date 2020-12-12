import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect } from 'react-router-dom';

import UserForm from '../UserForm';
import Input from '../../../ui/Input';
import DropDown from '../../../ui/DropDown';
import validationSchema from './validationSchema';
import { usersActions } from '../_usersSlice_';

const UserAddForm = () => {
  const {
    register, handleSubmit, control, errors,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();

  const roles = ['Клиент', 'Партнёр', 'Админ'];

  const handlerSubmit = (data) => {
    dispatch(usersActions.addUser(data));
    setIsDone(true);
  };

  if (isDone) {
    return <Redirect />;
  }

  return (
    <UserForm
      title="ДОБАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯ"
      buttonTitle="Добавить"
      onSubmit={handleSubmit(handlerSubmit)}
    >
      <Input
        title="ФИО"
        ref={register}
        name="fio"
        id="fio"
        errorMessage={errors.fio?.message}
      />
      <Input
        title="Email"
        ref={register}
        name="email"
        id="email"
        errorMessage={errors.email?.message}
      />
      <Input
        title="Телефон"
        ref={register}
        name="phone"
        id="phone"
        errorMessage={errors.phone?.message}
      />
      <Input
        title="Пароль"
        type="password"
        ref={register}
        name="password"
        id="password"
        errorMessage={errors.password?.message}
      />
      <Controller
        control={control}
        as={DropDown}
        name="role"
        id="role"
        title="Роль"
        items={roles}
        defaultValue=""
        errorMessage={errors.role?.message}
      />
    </UserForm>
  );
};

export default UserAddForm;
