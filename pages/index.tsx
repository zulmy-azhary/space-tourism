import type { NextPage } from "next";
import { MainLayout } from "../components/layout";
import bg from "/assets/home/background-home-desktop.jpg";
import { HomeContainer } from "../components/styles/SharedStyles";
import styled from "styled-components";

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

const Text = styled.h4`
  color: rgb(var(--black));
`;

const Home: NextPage = (): JSX.Element => {
  return (
    <MainLayout title="Home" description="Space tourism home page" image={bg}>
      <HomeContainer>
        <Content>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </p>
        </Content>
        <Wrapper>
          <Text>Explore</Text>
        </Wrapper>
      </HomeContainer>
    </MainLayout>
  );
};

export default Home;
