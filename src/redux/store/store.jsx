// store.js
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../reducers/createEmployeSlice';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    // Add other reducers as needed
  },
});

export default store;
