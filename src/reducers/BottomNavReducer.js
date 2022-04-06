import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  showPayment: false,
};

const BottomNavReducer = createSlice({
  name: "BottomNavReducer",
  initialState,
  reducers: {
    showPaymentAction(state, action) {
      state.showPayment = action.payload;
    },
  },
});

export const { showPaymentAction } = BottomNavReducer.actions;
export default BottomNavReducer.reducer;
