import { createSlice } from "@reduxjs/toolkit";
import { filtersInitialState } from './filterInitialState'
  
  const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        filterContacts: (state, { payload }) => {
            // state.status = payload;
            state.filter = payload;
          },
    },
  });
  
//   export const { setStatusFilter } = filtersSlice.actions.payload ;
  export const filtersReducer = filtersSlice.reducer;