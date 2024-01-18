import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// configureStore => reducer
// Slice => name, initialState, reducers
// reducers => function => state, action => update state
// from slice => export const {ReducerFunctions} = slice.actions => component
// from slice => export default slice.reducer => configureStore
