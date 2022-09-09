import type { NextPage } from "next";
import type { Destination } from "../types";
import styled from "styled-components";
import bg from "../assets/destination/background-destination-desktop.jpg";
import { Layout } from "../components/layout";
import { useCallback, useState } from "react";
import { Group, Wrapper } from "../components/ui";
import data from "../json/data.json";
import Image from "next/image";
import img from "/assets/destination/image-moon.png";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  column-gap: 9.813rem;
  margin-left: 4.25rem;
  margin-top: 4rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  min-width: 27.813rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const mVariants = {
  initial: { scale: .2, x: 350, opacity: 0},
  in: { scale: 1, x: 0, opacity: 1 },
  out: { scale: .2, x: -350, opacity: 0 },
}

const DestinationPage: NextPage = (): JSX.Element => {
  const destinations = data.destinations;
  const [destination, setDestination] = useState<Destination | undefined>([...destinations].shift());
  const [selectedName, setSelectedName] = useState<string | undefined>(destination?.name);
  
  const destinationHandler = useCallback((selectedDestinationName: string): void => {
    setSelectedName(selectedDestinationName);
    setDestination(destinations.find((destination: Destination): boolean => destination.name === selectedDestinationName));
  }, []);

  // const DynamicImage = dynamic(() => import(`../assets/destination/image-${destination?.name.toLowerCase()}.png`));
  const test = require(`/assets/destination/image-${destination?.name.toLowerCase()}.png`);

  return (
    <Layout title="Destination" description="Space tourism destination page" image={bg}>
      <Wrapper header={{ index: "01", title: "Pick Your Destination" }}>
        <Content>
          {destination && (
            <>
              <AnimatePresence mode="wait" initial={false}>
                <ImageWrapper as={motion.div} key={destination.images.png} variants={mVariants} initial="initial" animate="in" exit="out" transition={{ type: "linear", duration: .8 }}>
                    <Image width={445} height={445} src={test} priority />
                </ImageWrapper>
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                <Group key={destination.name} selected={selectedName} data={destinations} item={destination} handler={destinationHandler} />
              </AnimatePresence>
            </>
          )}
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default DestinationPage;