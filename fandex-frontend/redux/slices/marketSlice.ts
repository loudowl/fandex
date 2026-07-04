import { createSlice } from '@reduxjs/toolkit';

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    markets: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMarketsStart(state) {
      state.loading = true;
    },
    fetchMarketsSuccess(state, action) {
      state.markets = action.payload;
      state.loading = false;
    },
    fetchMarketsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchMarketsStart, fetchMarketsSuccess, fetchMarketsFailure } = marketSlice.actions;
export default marketSlice.reducer;
