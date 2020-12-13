import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, useParams } from 'react-router-dom';

import UserForm from '../UserForm';
import Input from '../../../ui/Input';
import DropDown from '../../../ui/DropDown';
import validationSchema from './validationSchema';
import { usersActions, selectUserById } from '../_usersSlice_';

const UserEditForm = () => {
  const { userID } = useParams();
  const user = useSelector((state) => selectUserById(state, userID));
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register, handleSubmit, control, errors, setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const roles = ['Клиент', 'Партнёр', 'Админ'];

  useEffect(() => {
    if (!user) return;

    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user]);

  const handlerSubmit = (data) => {
    dispatch(usersActions.editUser({
      id: +userID,
      dateReg: user.dateReg,
      ...data,
    }));
    history.goBack();
  };

  return (
    <UserForm
      title="Редактирование пользователя"
      buttonTitle="Сохранить"
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
        errorMessage={errors.role?.message}
        defaultValue=""
      />
    </UserForm>
  );
};

export default UserEditForm;
