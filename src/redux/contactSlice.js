import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const handleGetContactsFulfilled = (state, action) => {
  state.items = action.payload;
};

const handleAddContactsFulfilled = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteContactsFulfilled = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleGetContactsFulfilled)
      .addCase(addContacts.fulfilled, handleAddContactsFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
