import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64064ff277c1a905a0d907ae.mockapi.io";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// thunkAPI - об'єкт, який передається в асинхронний генератор екшену в redux-thunk. Містить властивості та методи доступу до стору, відправки екшенів, а також деякі додаткові.

export const addContacts = createAsyncThunk(
    "contacts/addContact",
      async (name, number, thunkAPI) => {
        try {
          const response = await axios.post("/contacts/contacts", { name, number });
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
    
    export const deleteContacts = createAsyncThunk(
        "contacts/deleteContact",
      async (id, thunkAPI) => {
        try {
          const response = await axios.delete(`/contacts/contacts/${id}`);
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
