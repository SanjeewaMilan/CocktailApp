import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface CocktailInterface {
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  idDrink: string;
  //favourite?: boolean;
}

const initialState: Array<CocktailInterface> = [];

const cocktailSlice = createSlice({
  name: "homeCocktail",
  initialState,
  reducers: {
    setCocktails: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const homeCocktailActions = cocktailSlice.actions;
export const selectState = (state: RootState) => state.homeCocktailReducer;

export default cocktailSlice;
