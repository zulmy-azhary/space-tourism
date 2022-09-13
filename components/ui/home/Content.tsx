import styled from "styled-components";
import { device } from "../../../helper";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 450px;

  @media ${device.tablet.mediaQuery} {
    width: 444px;
  }

  @media ${device.mobile.mediaQuery} {
    width: 100%;
    row-gap: 16px;
  }
`;

interface Props {
  subHeader: string;
  header: string;
  desc: string;
}

const Content = ({ subHeader, header, desc }: Props): JSX.Element => {
  return (
    <ContentWrapper>
      <h5>{subHeader}</h5>
      <h1>{header}</h1>
      <p>{desc}</p>
    </ContentWrapper>
  );
};

export default Content;
