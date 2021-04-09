import Button from "../Button";
import Heading from "../Heading";
import Subtitle from "../Subtitle";
import Paragraph from "../Paragraph";
import Shape from "../Shape";

import { GlobalStyle } from "./App.styles";

const App = () => (
  <>
    <Shape>
      <GlobalStyle />
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
  </>
);

export default App;
