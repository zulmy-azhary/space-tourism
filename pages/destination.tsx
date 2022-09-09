import type { NextPage } from "next";
import type { Destination } from "../types";
import styled from "styled-components";
import bg from "../assets/destination/background-destination-desktop.jpg";
import { Layout } from "../components/layout";
import { useCallback, useState } from "react";
import { Group, Wrapper } from "../components/ui";
import data from "../json/data.json";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  column-gap: 9.813rem;
  margin-left: 4.25rem;
  padding-top: 4rem;
`;

const Destination: NextPage = (): JSX.Element => {
  const [destination, setDestination] = useState<Destination>([...data.destinations].shift() as Destination);

  const itemHandler = useCallback((name: string) => {
    setDestination([...data.destinations].find((destination: Destination) => destination.name === name) as Destination);
  }, []);

  return (
    <Layout title="Destination" description="Space tourism destination page" image={bg}>
      <Wrapper header={{ index: "01", title: "Pick Your Destination" }}>
        <Content>
          <Group data={data} item={destination} handler={itemHandler} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Destination;