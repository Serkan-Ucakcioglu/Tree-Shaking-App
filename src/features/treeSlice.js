import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shake: false,
  apple: false,
  goBasket: false,
  arr: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

const treeSlice = createSlice({
  name: "treeSlice",
  initialState,
  reducers: {
    activeShake: (state) => {
      state.shake = true;
    },
    cancelShake: (state) => {
      state.shake = false;
    },
    activeApple: (state) => {
      state.apple = true;
    },
    activeGoBasket: (state) => {
      state.goBasket = true;
    },
    reset: (state) => {
      state.apple = false;
      state.shake = false;
      state.goBasket = false;
    },
  },
});

export const selectedArr = (state) => state.treeSlice.arr;
export const selectedGoBasket = (state) => state.treeSlice.goBasket;
export const selectedApple = (state) => state.treeSlice.apple;
export const selectedShake = (state) => state.treeSlice.shake;
export const { activeGoBasket, activeShake, cancelShake, activeApple, reset } =
  treeSlice.actions;
export default treeSlice.reducer;
