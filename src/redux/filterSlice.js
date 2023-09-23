import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    contactsFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
