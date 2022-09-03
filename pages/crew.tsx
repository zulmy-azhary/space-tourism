import { MainLayout } from "../components/layout"
import bg from "../assets/crew/background-crew-desktop.jpg";
import Head from "next/head";
import { Container } from "../components/styles/SharedStyles";
import { NextPage } from "next";

const Crew: NextPage = () => {
  return (
    <MainLayout image={bg}>
      <Head>
        <title>Space Tourism | Crew</title>
        <meta name="description" content="Space tourism crew page" />
      </Head>
      <Container>
        <h1>MOON</h1>
      </Container>
    </MainLayout>
  )
}

export default Crew