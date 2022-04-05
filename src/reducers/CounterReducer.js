import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: 0, value: 0 }],
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterAction(state, action) {
      const find = state.value.find((each) => each.id == action.payload.id);
      if (find == 0 || find == null) {
        const topush = { id: action.payload.id, value: action.payload.count };
        state.value.push(topush);
      } else {
        const Index = state.value.findIndex(
          (each) => each.id == action.payload.id
        );
        const topush = { id: action.payload.id, value: action.payload.count };
        const filtered = state.value.filter(
          (each) => each.id != action.payload.id
        );
        state.value = [...filtered, topush];
      }
    },
  },
});

export const { counterAction, incAction, decAction } = counterReducer.actions;
export default counterReducer.reducer;
