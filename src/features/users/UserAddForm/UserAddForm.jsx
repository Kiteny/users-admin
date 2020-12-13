// Vendors
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

// Components
import UserForm from '../UserForm';
import Input from '../../../ui/Input';
import DropDown from '../../../ui/DropDown';
import validationSchema from './validationSchema';

// State
import { usersActions } from '../_usersSlice_';

const UserAddForm = () => {
  const {
    register, handleSubmit, control, errors,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.users.roles);

  const handlerSubmit = (data) => {
    dispatch(usersActions.addUser(data));
    history.goBack();
  };

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
