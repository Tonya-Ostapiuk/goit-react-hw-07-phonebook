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

export const addContacts = createAsyncThunk(
    "contacts/addContact",
      async (contact, thunkAPI) => {
        try {
          const response = await axios.post("/contacts/contacts", contact);
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
