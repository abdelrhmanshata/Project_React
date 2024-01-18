import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  productsCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addCart: (state, action) => {
      if (state.productsCart.length !== 0) {
        let isFound = false;

        state.productsCart.forEach((element) => {
          if (element.id === action.payload.id) {
            element.quantity = element.quantity + 1;
            isFound = true;
          }
        });

        if (!isFound) {
          state.productsCart.push(action.payload);
        }
      } else {
        state.productsCart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      let productIndex = -1;
      state.productsCart.forEach((element, index) => {
        if (element.id === action.payload) {
          productIndex = index;
        }
      });

      if (productIndex !== -1) {
        state.productsCart.splice(productIndex, 1);
      }
    },

    increaseProductCart: (state, action) => {
      state.productsCart.forEach((element) => {
        if (element.id === action.payload) {
          element.quantity = element.quantity + 1;
        }
      });
    },
    decreaseProductCart: (state, action) => {
      state.productsCart.forEach((element) => {
        if (element.id === action.payload) {
          element.quantity = element.quantity - 1;
        }
      });
    },
  },
});

export const {
  addCart,
  removeFromCart,
  increaseProductCart,
  decreaseProductCart,
} = cartSlice.actions;
export default cartSlice.reducer;
