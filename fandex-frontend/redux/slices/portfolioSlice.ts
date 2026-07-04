import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    items: [],
  },
  reducers: {
    addToPortfolio(state, action) {
      state.items.push(action.payload);
    },
    removeFromPortfolio(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToPortfolio, removeFromPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
