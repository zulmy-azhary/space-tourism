import { Layout } from "../components/layout";
import type { NextPage } from "next";
import styled from "styled-components";
import data from "../json/data.json";
import type { Crew } from "../types";
import { useState } from "react";
import Wrapper from "../components/ui/Wrapper";
import { Bio, Dots } from "../components/ui/crew";
import { device, filterImage } from "../helper";
import { AnimatePresence, motion } from "framer-motion";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10.313rem;

  @media ${device.tablet.mediaQuery} {
    flex-direction: column;
    padding-left: 0;
    text-align: center;
    margin: 0 5rem;
    row-gap: 4.125rem;
  }

  @media ${device.mobile.mediaQuery} {
    flex-direction: column-reverse;
    margin: 2rem 0 0;
    row-gap: 2rem;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 9.625rem;
  row-gap: 7.5rem;

  @media ${device.tablet.mediaQuery} {
    margin-top: 3.75rem;
    row-gap: 2.5rem;
    align-items: center;
  }

  @media ${device.mobile.mediaQuery} {
    flex-direction: column-reverse;
    margin-top: 0;
    row-gap: 2rem;
  }
`;

const CrewPic = styled.div`
  align-self: flex-end;
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 10.313rem;
  z-index: -1;

  @media ${device.tablet.mediaQuery} {
    position: relative;
    width: 100%;
    right: 0;
    height: 32rem;

    img {
      position: absolute;
      max-width: 100%;
      height: 32rem;
      margin: 0 auto;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }

  @media ${device.mobile.mediaQuery} {
    height: 15.625rem;

    img {
      position: static;
      height: 15.625rem;
    }

    &:after {
      content: "";
      position: absolute;
      height: 1px;
      background-color: #383b4b;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

const CrewPage: NextPage = (): JSX.Element => {
  const crews: Crew[] = data.crew;
  const [crew, setCrew] = useState<Crew | undefined>([...crews].shift());

  const crewHandler = (crewName: string): void => {
    setCrew(crews.find((crew: Crew) => crew.name === crewName));
  };

  return (
    <Layout title="Crew" description="Space tourism crew page">
      <Wrapper header={{ index: "02", title: "Meet Your Crew" }}>
        <AnimatePresence mode="wait" initial={false}>
          {crew && (
            <Content key={crew.name}>
              <Main>
                <Bio role={crew.role} name={crew.name} bio={crew.bio} />
                <Dots crews={crews} crew={crew} handler={crewHandler} />
              </Main>
              <CrewPic
                as={motion.div}
                variants={imageVariants}
                initial="hidden"
                animate="animate"
                exit="exit"
                transition={{ ease: "linear", duration: .4 }}
              >
                <img src={filterImage(crew.images.png)} alt={crew.name} />
              </CrewPic>
            </Content>
          )}
        </AnimatePresence>
      </Wrapper>
    </Layout>
  );
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
}

export default CrewPage;