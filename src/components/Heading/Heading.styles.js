import styled from "styled-components";
import * as tokens from "../../style/variables";

export const Heading = styled.h1`
  margin: 0;
  font-weight: ${tokens.fontWeightBold};
  color: ${tokens.neutralColor1};

  ${({ size }) =>
    size === "small" &&
    `
    font-size: ${tokens.fontSizeLg};
    line-height: ${tokens.lineHeightDistant};
  `}
`;
