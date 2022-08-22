import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItems
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.title,
              quantity: cartItem.quantity,
              total: cartItem.totalPrice,
              price: cartItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
