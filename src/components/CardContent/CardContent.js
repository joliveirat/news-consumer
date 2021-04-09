import Button from "../Button";
import Shape from "../Shape";
import { Heading, Subtitle, Paragraph } from "./CardContent.styles";

const CardContent = () => (
  <Shape>
    <Heading type="h4">News Consumer</Heading>
    <Subtitle>Subtitle</Subtitle>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et mollis
      nisl, finibus vestibulum tellus. Nulla volutpat ac tellus et sodales.
      Donec vel interdum massa. Phasellus mollis eros a porta laoreet. Orci
      varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Integer placerat venenatis ultricies. Suspendisse sed
      ligula nunc. Sed feugiat faucibus iaculis. Suspendisse sagittis blandit
      justo, ac tempor nibh imperdiet in.
    </Paragraph>
    <Button color="primary">Button</Button>
  </Shape>
);

export default CardContent;
