import styled from "styled-components";
import * as tokens from "../../style/variables";

export const Button = styled.button`
  text-decoration: none;
  border: none;
  font-size: ${tokens.fontSizeSm};
  font-family: ${tokens.fontFamilyHighlight};
  font-weight: ${tokens.fontWeightMedium};
  line-height: ${tokens.lineHeightTight};
  padding: ${tokens.spacingSquishSizeXsStack};
  border-radius: ${tokens.radiusSizeNone};

  ${({ color }) =>
    color === "primary" &&
    `
      color: ${tokens.neutralColor5};
      background-color: ${tokens.brandColorPrimary3};

      &:hover {
        background-color: ${tokens.brandColorPrimary2};
      }
  `}
`;
