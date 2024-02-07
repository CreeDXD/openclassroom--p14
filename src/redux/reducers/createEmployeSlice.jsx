// authSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // firstName: null,
    // firstLast: null,
    // dateOfBirth: null,
    // street: null,
    // city: null,
    // livingState: null,
    // zipCode: null,
    // departement: null,
    //je ne pense pas stocké les infos dans mon store donc inutile
};

const createEmploye = createSlice({
  name: 'create',
  initialState,
  reducers: {
    createEmploye: (state, action) => {
        // const { 
        //     firstName, 
        //     lastName, 
        //     dateOfBirth, 
        //     dateOfHiring, 
        //     street, 
        //     city, 
        //     livingState, 
        //     zipCode, 
        //     departement 
        // } 
        // = action.payload;
        
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },

  },
});

export const { loginSuccess, logout } = createEmploye.actions;
export default createEmploye.reducer;
