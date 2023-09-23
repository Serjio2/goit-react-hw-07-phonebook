import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    prepare(contact) {
      return {
        payload: {
          ...contact,
          id: nanoid(),
        },
      };
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
