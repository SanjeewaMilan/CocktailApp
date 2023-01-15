import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { CocktailInterface } from "./cocktailSlice";

const initialState: Array<CocktailInterface> = [];

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      //check whether item already added to favourite
      const isInState = state.find(
        (itm) => itm.idDrink === action.payload.idDrink
      );

      if (isInState === undefined) {
        return [...state, action.payload];
      }
    },

    removeFromFavourite: (state, action) => {
      const index = state.findIndex((item) => item.idDrink === action.payload);
      if (index > -1) {
        const x = state.splice(index, 1);
        return state;
      }
    },
  },
});

export const favouriteActions = favouriteSlice.actions;
//export const selectState = (state: RootState) => state.favouriteReducer;

export default favouriteSlice;
