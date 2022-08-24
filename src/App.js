import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitital = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data...",
        })
      );
      const response = await fetch(
        "https://redux-https-concept-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Data Successfully",
        })
      );
    };
    if (isInitital) {
      isInitital = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Failed",
          message: "Failed to send cart data!",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
};

export default App;
