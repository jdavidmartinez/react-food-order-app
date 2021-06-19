import clasess from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={clasess.button}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={clasess.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
