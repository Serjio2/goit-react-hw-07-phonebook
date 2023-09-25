import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsApi';

export const getAllContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, contactsAPI) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (error) {
      return contactsAPI.rejectWithValue(error.message);
    }
  }
);
