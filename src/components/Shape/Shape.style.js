import styled from "styled-components";
import * as tokens from "../../style/variables";

export const Shape = styled.div`
  border-radius: ${tokens.radiusSizeNone};
  padding: ${tokens.spacingSizeSm};
  border: ${tokens.borderSizeThin} solid ${tokens.neutralColor4};
  background-color: ${tokens.neutralColor5};
`;
