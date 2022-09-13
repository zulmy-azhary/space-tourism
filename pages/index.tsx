import type { NextPage } from "next";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { MainCircle } from "../components/utils";
import { device } from "../helper";


// Just for Home Page
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 4.5rem 165px 0;

  @media ${device.tablet.mediaQuery} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    row-gap: 156px;
  }

  @media ${device.mobile.mediaQuery} {
    row-gap: 81px;
    margin-top: 0;
  }
`;

const Content = styled.div`
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

const data: Record<string, string> = {
  subHeader: "So, You Want To Travel To",
  header: "Space",
  desc: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  explore: "Explore",
};

const HomePage: NextPage = (): JSX.Element => {
  
  return (
    <Layout title="Home" description="Space tourism home page">
      <Container>
        <Content>
          <h5>{data.subHeader}</h5>
          <h1>{data.header}</h1>
          <p>{data.desc}</p>
        </Content>
        <MainCircle>
          {data.explore}
        </MainCircle>
      </Container>
    </Layout>
  );
};

export default HomePage;
