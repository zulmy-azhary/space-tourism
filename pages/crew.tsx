import { MainLayout } from "../components/layout"
import bg from "../assets/crew/background-crew-desktop.jpg";
import { Container, Header, HeaderNumber, HeaderName } from "../components/styles/SharedStyles";
import type { NextPage } from "next";

const Crew: NextPage = (): JSX.Element => {
  return (
    <MainLayout title="Crew" description="Space tourism crew page" image={bg}>
      <Container>
        {/* Header */}
        <Header>
          <HeaderNumber>02</HeaderNumber>
          <HeaderName>Meet Your Crew</HeaderName>
        </Header>
        {/* Content */}
      </Container>
    </MainLayout>
  )
}

export default Crew