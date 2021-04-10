import styled from "styled-components";
import HeadingComponent from "../../components/Heading";

import * as tokens from "../../style/variables";

export const PageContainer = styled.div`
  padding: ${tokens.spacingSquishSizeXsStack};
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Heading = styled(HeadingComponent)`
  padding-bottom: ${tokens.spacingSquishSizeXsStack};
`;
