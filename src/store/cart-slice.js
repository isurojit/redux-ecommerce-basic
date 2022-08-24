import { createSlice } from "@reduxjs/toolkit";
import { uiAction } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-https-concept-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Data Successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Failed",
          message: "Failed to send cart data!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
