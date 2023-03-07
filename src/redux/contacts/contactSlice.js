import { createSlice } from '@reduxjs/toolkit';
import { contactInitialState } from './contactInitialState';
import { fetchContacts, addContacts, deleteContacts } from './contactThunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactInitialState,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      // state.isLoading = true;
      state.status = 'pending';
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'fulfilled';
      state.contacts = 'payload';
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'rejected';
      state.error = 'payload';
    },
    [addContacts.pending]: state => {
      // state.isLoading = true;
      state.status = 'pending';
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'fulfilled';
      state.contacts.push(payload);
      state.error = null;
    },
    [addContacts.rejected]: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'rejected';
      state.error = 'payload';
    },
    [deleteContacts.pending]: state => {
      // state.isLoading = true;
      state.status = 'pending';
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'rejected';
      state.error = 'payload';
    },
    // [filterContacts]: (state, { payload }) => {
    //   // state.status = payload;
    //   state.filter = payload;
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => void state.contacts.push(action.payload),
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     filterContacts: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact, filterContacts } =
//   contactsSlice.actions;

// export const getContact = state => {
//   return state.contacts.filter(({ name }) =>
//     name.toLowerCase().includes(state.filter.toLowerCase())
//   );
// };

// export const getFilter = state => state.filter;
