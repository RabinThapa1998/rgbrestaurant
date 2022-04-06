import { configureStore } from "@reduxjs/toolkit";
import BottomNavReducer from "../reducers/BottomNavReducer";
import counterReducer from "../reducers/CounterReducer";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    payment: BottomNavReducer,
  },
});
