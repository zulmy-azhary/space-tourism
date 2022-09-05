import { MainLayout } from "../components/layout";
import bg from "../assets/crew/background-crew-desktop.jpg";
import { Container, Header, SubHeading, Heading } from "../components/styles/SharedStyles";
import type { NextPage } from "next";

const Crew: NextPage = (): JSX.Element => {
  return (
    <MainLayout title="Crew" description="Space tourism crew page" image={bg}>
      <Container>
        {/* Header */}
        <Header>
          <SubHeading>02</SubHeading>
          <Heading>Meet Your Crew</Heading>
        </Header>
        {/* Content */}
      </Container>
    </MainLayout>
  );
};

export default Crew;