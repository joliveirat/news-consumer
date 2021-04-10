import Button from "../Button";
import Shape from "../Shape";
import { Heading, Subtitle, Paragraph } from "./CardContent.style";

const CardContent = ({
  title,
  subtitle,
  paragraph,
  buttonLabel,
  buttonElement,
  buttonHref,
  buttonTarget,
  onClickButton,
  className,
}) => (
  <Shape element="article" className={className}>
    <Heading type="h1">{title}</Heading>
    <Subtitle>{subtitle}</Subtitle>
    <Paragraph>{paragraph}</Paragraph>
    <Button
      color="primary"
      element={buttonElement}
      href={buttonHref}
      target={buttonTarget}
      onClick={onClickButton}
    >
      {buttonLabel}
    </Button>
  </Shape>
);

export default CardContent;
