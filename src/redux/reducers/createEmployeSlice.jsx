// authSlice.jsx
// addEmployee action to add employee from the form
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState:{list:[]},
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload)
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export const selectEmployees = (state) => state.employees.list
export default employeeSlice.reducer;
