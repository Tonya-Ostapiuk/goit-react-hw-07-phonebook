import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice.js';

export const store = configureStore(
  {
    reducer: { contacts: contactsReducer },
  }

);

