import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../components/layout';
import bg from "../assets/home/background-home-desktop.jpg";
import { Container } from "../components/styles/SharedStyles";
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = () => {
  return (
    <MainLayout image={bg}>
      <Head>
        <title>Space Tourism | Home</title>
        <meta name="description" content="Space tourism home page" />
      </Head>
      <Container>
        <Content>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
        </Content>
      </Container>
    </MainLayout>
  )
}

export default Home;