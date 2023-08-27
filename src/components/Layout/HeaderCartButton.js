import { useContext } from "react";
import cartIcon from "../../assets/black-shopping-cart.svg";
import classes from "./HeaderCart.module.css";
import CartContext from "../../store/cart-context";

const Button = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes["main-button"]} onClick={props.onClick}>
      <img src={cartIcon} />
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default Button;
