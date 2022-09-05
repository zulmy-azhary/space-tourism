import type { GetServerSideProps, NextPage } from "next";
import type { Data, Destination } from "../types";
import Image from "next/image";
import styled from "styled-components";
import bg from "../assets/destination/background-destination-desktop.jpg";
import { MainLayout } from "../components/layout";
import {
  Container,
  NavText,
  Header,
  SubHeading,
  Heading,
  SubTitle,
  Title,
} from "../components/styles/SharedStyles";
import img from "/assets/destination/image-moon.png";
import useSWR from "swr";
import { fetcher } from "../helper";
import { useEffect, useState } from "react";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  column-gap: 9.813rem;
  margin-left: 4.25rem;
`;

const Banner = styled.div`
  width: 100%;
  min-width: 27.813rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: fit-content;
`;

const TabList = styled.ul`
  height: 2.125rem;
  display: flex;
  column-gap: 2.25rem;
  align-items: center;
  margin-bottom: 2.313rem;
`;

const Tab = styled(NavText)`
  position: relative;
  color: rgb(var(--sky));
  height: 100%;
  text-align: center;
  cursor: pointer;

  &:hover:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: rgb(var(--white));
    bottom: 0;
    left: 0;
  }
`;

const Description = styled.p`
  margin-top: .875rem;
  margin-bottom: 3.375rem;
`;

const Info = styled.div`
  display: flex;
  column-gap: 4.938rem;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #383b4b;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  padding-top: 1.75rem;
`;

interface Props {
  apiUrl: string;
}

const Destination: NextPage<Props> = ({ apiUrl }): JSX.Element => {
  const { data, isValidating } = useSWR<Data>(`${apiUrl}/api/data`, fetcher);
  const [item, setItem] = useState<Destination | undefined>({} as Destination);

  const itemHandler = (item: Destination) => {
    setItem(item);
  };
  
  useEffect(() => {
    setItem(() => data?.destinations.find((destination: Destination) => destination.name === "Moon"));
  }, [data]);
  

  return (
    <MainLayout title="Destination" description="Space tourism destination page" image={bg}>
      <Container>
        {/* Header */}
        <Header>
          <SubHeading>01</SubHeading>
          <Heading>Pick Your Destination</Heading>
        </Header>

        {/* Content */}
        <MainContent>
          {item &&
            <>
              <Banner>
                <Image width={445} height={445} src={img} />
              </Banner>
              <Wrapper>
                <TabList>
                  {!isValidating &&
                    data?.destinations.map((destination: Destination, idx: number) => (
                      <Tab onClick={itemHandler.bind(this, destination)} key={idx}>{destination.name}</Tab>
                    ))}
                </TabList>
                <h2>{item.name}</h2>
                <Description>{item.description}</Description>
                <Info>
                  <Item>
                    <SubTitle>Avg. Distance</SubTitle>
                    <Title>{item.distance}</Title>
                  </Item>
                  <Item>
                    <SubTitle>Est. Travel Time</SubTitle>
                    <Title>{item.travel}</Title>
                  </Item>
                </Info>
              </Wrapper>
            </>
          }
        </MainContent>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      apiUrl: process.env.API_URL,
    },
  };
};

export default Destination;
