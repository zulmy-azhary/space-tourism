import type { NextPage } from "next";
import Head from "next/head";
import bg from "../assets/destination/background-destination-desktop.jpg";
import { MainLayout } from "../components/layout";
import { Container } from "../components/styles/SharedStyles";

const Destination: NextPage = () => {
  return (
    <MainLayout image={bg}>
      <Head>
        <title>Space Tourism | Destination</title>
        <meta name="description" content="Space tourism destination page" />
      </Head>
      <Container>
        <h1>MOON</h1>
      </Container>
    </MainLayout>
  )
}

export default Destination;