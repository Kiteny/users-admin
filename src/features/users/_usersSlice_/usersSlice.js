import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import usersAPI from '../../../api/local/usersAPI';

const usersEntityAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.fio.localeCompare(b.fio),
});

const usersSlice = createSlice({
  name: 'users',
  initialState: usersEntityAdapter.getInitialState(),
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
    },
    getFilteredUsers(state, { payload }) {
      const { field, value } = payload;

      usersEntityAdapter.removeAll(state);
      usersEntityAdapter.addMany(state, usersAPI.getAllUsers((user) => user[field] === value));
    },
    deleteUser(state, { payload }) {
      usersEntityAdapter.removeOne(state, payload);
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
