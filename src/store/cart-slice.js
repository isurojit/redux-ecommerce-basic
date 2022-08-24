import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!exsistingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exsistingItem.quantity = exsistingItem.quantity + 1;
        exsistingItem.totalPrice = exsistingItem.totalPrice + newItem.price;
      }
    },
    removeItemsFromCart(state, action) {
      const id = action.payload;
      const exsistingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (exsistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exsistingItem.quantity--;
        exsistingItem.totalPrice =
          exsistingItem.totalPrice - exsistingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
