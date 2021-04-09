import PropTypes from "prop-types";
import * as style from "./Paragraph.style";

const Paragraph = ({ children }) => (
  <style.Paragraph>{children}</style.Paragraph>
);

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Paragraph;
