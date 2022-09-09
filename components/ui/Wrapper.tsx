import styled from "styled-components";

// Inner Page
const Container = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  column-gap: 1.75rem;
  align-items: center;
  margin-top: 4.75rem;
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
