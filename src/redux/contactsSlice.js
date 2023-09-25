import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, handleFulfilled)
      .addCase(getAllContacts.rejected, handleRejected);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
