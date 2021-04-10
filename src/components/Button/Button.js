import PropTypes from "prop-types";
import * as style from "./Button.style";

const Button = ({
  children,
  className,
  color,
  element,
  href,
  target,
  onClick,
}) => {
  const linkProps = { href, target, onClick };
  const buttonProps = { onClick };

  const elementProps = element === "a" ? linkProps : buttonProps;

  return (
    <style.Button
      as={element}
      color={color}
      {...elementProps}
      className={className}
    >
      {children}
    </style.Button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  element: PropTypes.oneOf(["a", "button"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  element: "button",
};

export default Button;
