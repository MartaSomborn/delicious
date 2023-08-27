import delicious from "../../assets/delicious.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.image}>
        <img src={delicious} alt="Delicious food" />
      </div>
    </>
  );
};

export default Header;
