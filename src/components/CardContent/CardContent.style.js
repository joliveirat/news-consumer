import styled from "styled-components";
import HeadingComponent from "../Heading";
import SubtitleComponent from "../Subtitle";
import ParagraphComponent from "../Paragraph";

import * as tokens from "../../style/variables";

export const Heading = styled(HeadingComponent)`
  margin-bottom: ${tokens.spacingSizeXxxs};
`;
export const Subtitle = styled(SubtitleComponent)`
  margin-bottom: ${tokens.spacingSizeXxs};
`;
export const Paragraph = styled(ParagraphComponent)`
  margin-bottom: ${tokens.spacingSizeSm};
`;
