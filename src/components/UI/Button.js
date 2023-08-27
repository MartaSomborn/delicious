import "./Button.css";

const Button = (props) => {
  const classes = props.className + " button";

  return (
    <button className={classes} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
