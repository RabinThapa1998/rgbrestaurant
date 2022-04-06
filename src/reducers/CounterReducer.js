import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: 0, value: 0 }],
  finalBill: [{ id: 0, value: 0 }],
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
    pushBillAction(state, action) {
      const temp = [...state.finalBill, ...action.payload];
      state.value = [{ id: 0, value: 0 }];
      let totals = [];
      temp.forEach((x) => {
        const obj = totals.find((o) => o.id === x.id);
        if (obj) {
          obj.value = obj.value + x.value;
        } else {
          totals.push(x);
        }
      });
      totals = totals.filter((each) => each.value != 0);
      state.finalBill = totals;
    },
  },
});

export const { counterAction, pushBillAction } = counterReducer.actions;
export default counterReducer.reducer;
