import PropTypes from "prop-types";
import * as style from "./Paragraph.style";

const Paragraph = ({ className, children }) => (
  <style.Paragraph className={className}>{children}</style.Paragraph>
);

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
};

export default Paragraph;
