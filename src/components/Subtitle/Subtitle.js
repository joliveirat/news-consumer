import PropTypes from "prop-types";
import * as style from "./Subtitle.style";

const Subtitle = ({ element, children, size }) => (
  <style.Subtitle as={element} size={size}>
    {children}
  </style.Subtitle>
);

Subtitle.propTypes = {
  element: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "div",
  ]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Subtitle.defaultProps = {
  element: "p",
  size: "small",
};

export default Subtitle;
