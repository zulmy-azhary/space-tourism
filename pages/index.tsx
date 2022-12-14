import type { NextPage } from "next";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { Content, MainCircle } from "../components/ui/home";
import { device } from "../helper";
import Link from "next/link";


// Just for Home Page
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 4.5rem 10.313rem 0;

  @media ${device.tablet.mediaQuery} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 6.625rem 0 3rem;
    row-gap: 9.75rem;
  }

  @media ${device.mobile.mediaQuery} {
    height: 100%;
    row-gap: 5.063rem;
    margin-top: 1.25rem;
    margin-bottom: 0;
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
        <Content subHeader={data.subHeader} header={data.header} desc={data.desc} />
        <Link passHref href={"/destination"}>
          <MainCircle text={data.explore} />
        </Link>
      </Container>
    </Layout>
  );
};

export default HomePage;
