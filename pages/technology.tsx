import type { NextPage } from 'next';
import { MainLayout } from '../components/layout';
import { Container, Header, HeaderNumber, HeaderName } from '../components/styles/SharedStyles';
import bg from "../assets/technology/background-technology-desktop.jpg";

const Technology: NextPage = (): JSX.Element => {
  return (
    <MainLayout title="Technology" description="Space tourism technology page" image={bg}>
      <Container>
        {/* Header */}
        <Header>
          <HeaderNumber>03</HeaderNumber>
          <HeaderName>Space Launch 101</HeaderName>
        </Header>
        {/* Content */}
      </Container>
    </MainLayout>
  )
}

export default Technology;