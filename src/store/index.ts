import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import loadingSlice from "./loadingSlice";
import favouriteSlice from "./favouriteSlice";

const store = configureStore({
  reducer: {
    homeCocktailReducer: cocktailSlice.reducer,
    loadingReducer: loadingSlice.reducer,
    favouriteReducer: favouriteSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
