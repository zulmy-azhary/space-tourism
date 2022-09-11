import type { NextPage } from "next";
import type { Destination } from "../types";
import styled from "styled-components";
import bg from "/public/assets/destination/background-destination-desktop.jpg";
import { Layout } from "../components/layout";
import { useCallback, useState } from "react";
import Wrapper from "../components/ui/Wrapper";
import data from "../json/data.json";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { filterImage } from "../helper";
import { Group } from "../components/ui/destination";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 9.813rem;
  margin-left: 4.25rem;
  margin-top: 4rem;
  padding-left: 165px;
  padding-right: 165px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  min-width: 27.813rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const DestinationPage: NextPage = (): JSX.Element => {
  const destinations = data.destinations;
  const [destination, setDestination] = useState<Destination | undefined>([...destinations].shift());
  const [selectedName, setSelectedName] = useState<string | undefined>(destination?.name);
  
  const destinationHandler = useCallback((selectedDestinationName: string): void => {
    setSelectedName(selectedDestinationName);
    setDestination(destinations.find((destination: Destination): boolean => destination.name === selectedDestinationName));
  }, []);

  return (
    <Layout title="Destination" description="Space tourism destination page" image={bg}>
      <Wrapper header={{ index: "01", title: "Pick Your Destination" }}>
        <AnimatePresence mode="wait" initial={false}>
          {destination && (
            <Content key={destination.name}>
              <ImageWrapper
                as={motion.div}
                key={destination.images.png}
                variants={imageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={{ type: "linear", duration: .7 }}
              >
                <Image width={445} height={445} src={filterImage(destination.images.png)} priority alt={destination.name} />
              </ImageWrapper>
              <Group
                key={destination.name}
                selected={selectedName}
                destinations={destinations}
                item={destination}
                handler={destinationHandler}
              />
            </Content>
          )}
        </AnimatePresence>
      </Wrapper>
    </Layout>
  );
};

const imageVariants = {
  initial: { scale: .4, x: 350, opacity: 0 },
  in: { scale: 1, x: 0, opacity: 1 },
  out: { scale: .4, x: -350, opacity: 0 },
};

export default DestinationPage;