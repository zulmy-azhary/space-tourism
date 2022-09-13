import styled from "styled-components";
import { device } from "../../helper";

// Inner Page
const Container = styled.section`
  width: 100%;
  height: 100%;
  /* position: relative; */

  @media ${device.mobile.mediaQuery} {
    margin-bottom: 56px;
  }
`;

const Header = styled.div`
  display: flex;
  column-gap: 28px;
  align-items: center;
  margin-top: 76px;
  padding: 0 165px;

  @media ${device.tablet.mediaQuery} {
    padding: 0 38.5px;
    margin-top: 40px;
  }
`;

const SubHeading = styled.h5`
  color: rgba(var(--white), .25);
  mix-blend-mode: normal;
  font-weight: bold;
`;

const Heading = styled.h5`
  color: var(--white);
`;

interface Props {
  header: {
    index: string;
    title: string;
  };
  children: React.ReactNode;
}

const Wrapper = ({ header, children }: Props): JSX.Element => {
  return (
    <Container>
      <Header>
        <SubHeading>{header.index}</SubHeading>
        <Heading>{header.title}</Heading>
      </Header>
      {children}
    </Container>
  );
};

export default Wrapper;
