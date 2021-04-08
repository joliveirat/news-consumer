import * as style from "./Button.style";

const Button = ({ children, color, onClick }) => (
  <style.Button color={color} onClick={onClick}>
    {children}
  </style.Button>
);

export default Button;
