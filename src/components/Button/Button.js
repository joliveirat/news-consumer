import PropTypes from "prop-types";
import * as style from "./Button.style";

const Button = ({ children, color, onClick }) => (
  <style.Button color={color} onClick={onClick}>
    {children}
  </style.Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
