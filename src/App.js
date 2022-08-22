import React from "react";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

const App = () => {
  const showCart = useSelector((state) => state.ui.isCartVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
