import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface LoadingInterface {
  loading: boolean;
}

const initialState: LoadingInterface = { loading: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export const selecLoadingtState = (state: RootState) => state.loadingReducer;

export default loadingSlice;
