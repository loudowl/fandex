import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './slices/marketSlice';
import portfolioReducer from './slices/portfolioSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    market: marketReducer,
    portfolio: portfolioReducer,
    user: userReducer,
  },
});

export default store;
