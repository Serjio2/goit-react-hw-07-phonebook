import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const contactsPanding = state => {
  state.isLoading = true;
}

const contactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
}

const contactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsPostFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
}

const contactsDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, contactsPanding)
      .addCase(getContacts.fulfilled, contactsFulfilled)
      .addCase(getContacts.rejected, contactsRejected)
      .addCase(addContact.pending, contactsPanding)
      .addCase(addContact.fulfilled, contactsPostFulfilled)
      .addCase(addContact.rejected, contactsRejected)
      .addCase(deleteContact.pending, contactsPanding)
      .addCase(deleteContact.fulfilled, contactsDeleteFulfilled)
      .addCase(deleteContact.rejected, contactsRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
