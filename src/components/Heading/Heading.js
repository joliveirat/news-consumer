import PropTypes from "prop-types";
import * as style from "./Heading.style";

const Heading = ({ children, className, size, type }) => (
  <style.Heading as={type} size={size} className={className}>
    {children}
  </style.Heading>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  type: "h1",
  size: "small",
};

export default Heading;
