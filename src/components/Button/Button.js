import PropTypes from "prop-types";
import * as style from "./Button.style";

const Button = ({ children, className, color, onClick }) => (
  <style.Button color={color} onClick={onClick} className={className}>
    {children}
  </style.Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
