import { createGlobalStyle } from "styled-components";
import * as tokens from "../../style/variables";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${tokens.fontFamilyHighlight};
  }
`;
