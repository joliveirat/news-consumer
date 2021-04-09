import PropTypes from "prop-types";
import * as style from "./Shape.style";

const Shape = ({ element, children }) => (
  <style.Shape as={element}>{children}</style.Shape>
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
};

Shape.defaultProps = {
  element: "div",
};

export default Shape;
