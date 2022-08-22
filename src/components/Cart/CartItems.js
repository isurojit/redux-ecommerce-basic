import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const cartItemAddHandler = () => {
    dispatch(
      cartActions.addItemsToCart({
        id,
        title,
        price,
      })
    );
  };
  const cartItemReduceHandler = () => {
    dispatch(cartActions.removeItemsFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          X <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartItemReduceHandler}>-</button>
          <button onClick={cartItemAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
