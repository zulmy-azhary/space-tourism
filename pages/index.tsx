import type { NextPage } from "next";
import { Layout } from "../components/layout";
import bg from "/public/assets/home/background-home-desktop.jpg";
import styled from "styled-components";
import { MainCircle } from "../components/utils";
import { device } from "../helper";


// Just for Home Page
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4.5rem;
  margin-left: 165px;
  margin-right: 165px;

  @media ${device.mobile.mediaQuery} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 450px;
`;

const data: Record<string, string> = {
  subHeader: "So, You Want To Travel To",
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
        <MainCircle size="17.125rem">
          {data.explore}
        </MainCircle>
      </Container>
    </Layout>
  );
};

export default HomePage;
