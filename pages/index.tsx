import type { NextPage } from "next";
import { Layout } from "../components/layout";
import bg from "/assets/home/background-home-desktop.jpg";
import styled from "styled-components";
import { Circle } from "../components/utils";

// Just for Home Page
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 450px;
`;

const Wrapper = styled.div`
  width: 17.125rem;
  height: 17.125rem;
  background-color: rgb(var(--white));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgb(var(--sky));
  }
`;

// const Text = styled.h4`
//   color: rgb(var(--black));
// `;

const data: Record<string, string> = {
  subHeader: "SO, YOU WANT TO TRAVEL TO",
  header: "Space",
  desc: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  explore: "Explore",
};

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Layout title="Home" description="Space tourism home page" image={bg}>
      <Container>
        <Content>
          <h5>{data.subHeader}</h5>
          <h1>{data.header}</h1>
          <p>{data.desc}</p>
        </Content>
        <Circle size="17.125rem" type="primary">
          {data.explore}
        </Circle>
      </Container>
    </Layout>
  );
};

export default HomePage;
