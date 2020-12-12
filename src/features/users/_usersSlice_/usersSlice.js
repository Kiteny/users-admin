/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import usersAPI from '../../../api/local/usersAPI';

const usersEntityAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.fio.localeCompare(b.fio),
});

const usersSlice = createSlice({
  name: 'users',
  initialState: usersEntityAdapter.getInitialState({
    currentRole: 'Все',
  }),
  reducers: {
    addUser(_, { payload }) {
      const {
        fio, email, phone, password, role,
      } = payload;
      usersAPI.addUser(fio, email, phone, password, role);
    },
    getAllUsers(state) {
      usersEntityAdapter.removeAll(state);
      usersEntityAdapter.addMany(state, usersAPI.getAllUsers());
      state.currentRole = 'Все';
    },
    getFilteredUsers(state, { payload }) {
      const { field, value } = payload;

      if (field === 'role') {
        state.currentRole = value;
      }

      usersEntityAdapter.removeAll(state);
      usersEntityAdapter.addMany(state, usersAPI.getAllUsers((user) => user[field] === value));
    },
    deleteUser(state, { payload: id }) {
      usersEntityAdapter.removeOne(state, id);
      usersAPI.deleteUser(id);
    },
    editUser(state, { payload }) {
      const now = new Date().toISOString();
      usersEntityAdapter.upsertOne(state, { ...payload, dateLastEdit: now });
      usersAPI.editUser(payload);
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal,
} = usersEntityAdapter.getSelectors((state) => state.users);
