import { configureStore } from "@reduxjs/toolkit";
import treeSlice from "../features/treeSlice";

const store = configureStore({
  reducer: {
    treeSlice,
  },
});
export default store;
