import classNames from "classnames";
import styles from "./input.module.css";

const Input = ({ type, name, placeholder, value="", className }) => {
  return (
    <input
      className={classNames(className, styles.input)}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
