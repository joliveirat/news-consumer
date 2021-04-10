import styled, { keyframes } from "styled-components";

import * as tokens from "../../style/variables";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  text-align: center;
`;

export const LoadingAnimation = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: ${tokens.borderSizeThin} solid ${tokens.neutralColor3};
  border-right: ${tokens.borderSizeThin} solid ${tokens.neutralColor3};
  border-bottom: ${tokens.borderSizeThin} solid ${tokens.neutralColor3};
  border-left: ${tokens.borderSizeThick} solid ${tokens.neutralColor2};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: ${tokens.spacingSizeNano} auto;
`;
