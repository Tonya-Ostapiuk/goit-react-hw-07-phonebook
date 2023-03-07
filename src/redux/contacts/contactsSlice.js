import { createSlice } from "@reduxjs/toolkit";
import { contactInitialState } from './contactInitialState';
import { fetchContacts, addContacts, deleteContacts } from './contactThunk';

const handlePending = state => {
  state.status = 'pending';
};

const handleRejected = (state, { payload }) => {
   state.status = 'rejected';
   state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending ,
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled';
      state.contacts.items = payload ;
      state.error = null; 
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled';
      state.contacts.items.push(payload);
      state.error = null;
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled';
      state.error = null; 
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload.id);
    },
    [deleteContacts.rejected]: handleRejected,
  },
  reducers: {
    filterContacts: (state, action) => {
        state.filter = action.payload;
      },
},
});

export const { filterContacts } = contactsSlice.actions ;
export const contactsReducer = contactsSlice.reducer;

