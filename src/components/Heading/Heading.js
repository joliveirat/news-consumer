import PropTypes from "prop-types";
import * as style from "./Heading.styles";

const Heading = ({ children, size, type }) => (
  <style.Heading as={type} size={size}>
    {children}
  </style.Heading>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

Heading.defaultProps = {
  type: "h1",
  size: "small",
};

export default Heading;
