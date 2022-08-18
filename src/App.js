import React from "react";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";

const App = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default App;
