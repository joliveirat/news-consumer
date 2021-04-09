import Button from "../Button";
import Heading from "../Heading";
import Subtitle from "../Subtitle";

import { GlobalStyle } from "./App.styles";

const App = () => (
  <>
    <GlobalStyle />
    <Heading type="h4">News Consumer</Heading>
    <Subtitle>Subtitle</Subtitle>
    <Button color="primary">Button</Button>
  </>
);

export default App;
