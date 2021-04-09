import PropTypes from "prop-types";
import * as style from "./Shape.style";

const Shape = ({ children, className, element }) => (
  <style.Shape as={element} className={className}>
    {children}
  </style.Shape>
);

Shape.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([
    "div",
    "section",
    "article",
    "main",
    "header",
    "footer",
    "aside",
    "nav",
  ]),
  className: PropTypes.string,
};

Shape.defaultProps = {
  element: "div",
};

export default Shape;
