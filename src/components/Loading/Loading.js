import * as style from "./Loading.style";

const Loading = ({ text }) => (
  <style.LoadingContainer>
    <style.LoadingAnimation />
    {text}
  </style.LoadingContainer>
);

export default Loading;
