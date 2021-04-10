import styled from "styled-components";
import HeadingComponent from "../../components/Heading";

import * as tokens from "../../style/variables";

export const PageContainer = styled.div`
  padding: ${tokens.spacingSquishSizeXsStack};
  min-height: 100vh;
  box-sizing: border-box;
  max-width: 1500px;
  margin: 0 auto;
`;

export const Heading = styled(HeadingComponent)`
  padding-bottom: ${tokens.spacingSquishSizeXsStack};
`;

export const Content = styled.section`
  height: auto;
  display: grid;
  grid-gap: ${tokens.spacingSizeXs};
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
