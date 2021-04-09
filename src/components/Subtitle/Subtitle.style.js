import styled from "styled-components";
import * as tokens from "../../style/variables";

export const Subtitle = styled.p`
  margin: 0;
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.neutralColor2};

  ${({ size }) =>
    size === "small" &&
    `
    font-size: ${tokens.fontSizeMd};
    line-height: ${tokens.lineHeightMedium};
  `}
`;
