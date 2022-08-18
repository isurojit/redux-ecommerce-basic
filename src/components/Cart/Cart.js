import React from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItems
          item={{
            title: "Kebab",
            quantity: 3,
            total: 18,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
