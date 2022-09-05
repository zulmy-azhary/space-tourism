import type { NextPage } from "next";
import { MainLayout } from "../components/layout";
import { Container, Header, SubHeading, Heading } from "../components/styles/SharedStyles";
import bg from "../assets/technology/background-technology-desktop.jpg";

const Technology: NextPage = (): JSX.Element => {
  return (
    <MainLayout title="Technology" description="Space tourism technology page" image={bg}>
      <Container>
        {/* Header */}
        <Header>
          <SubHeading>03</SubHeading>
          <Heading>Space Launch 101</Heading>
        </Header>
        {/* Content */}
      </Container>
    </MainLayout>
  );
};

export default Technology;