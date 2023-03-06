import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => void state.contacts.push(action.payload),
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer; 

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

export const getContact = state => {
  return state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase())
  );
};

export const getFilter = state => state.filter;
