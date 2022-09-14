import styled from "styled-components";
import { device } from "../../../helper";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 28.125rem;

  @media ${device.tablet.mediaQuery} {
    width: 27.75rem;
  }

  @media ${device.mobile.mediaQuery} {
    width: 100%;
    row-gap: 1rem;
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
