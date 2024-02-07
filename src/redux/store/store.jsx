// store.js
import { configureStore } from '@reduxjs/toolkit';
import createEmploye from '../reducers/createEmployeSlice';

const store = configureStore({
  reducer: {
    create: createEmploye,
    
    

    // Add other reducers as needed
  },
});

export default store;
