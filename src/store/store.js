import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterReducer";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
