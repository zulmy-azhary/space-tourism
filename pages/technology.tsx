import type { NextPage } from "next";
import { Layout } from "../components/layout";
import bg from "/public/assets/technology/background-technology-desktop.jpg";
import data from "../json/data.json";
import type { Technology } from "../types";
import { useState } from "react";
import styled from "styled-components";
import { Circle } from "../components/utils";
import { NavText } from "../components/styles/SharedStyles";
import Wrapper from "../components/ui/Wrapper";
import Image from "next/image";
import { filterImage } from "../helper";
import { AnimatePresence, motion } from "framer-motion";

const Content = styled.div`
  display: flex;
  margin-top: 1.625rem;
  justify-content: space-between;
  align-items: center;
  margin-left: 165px;
`;

const Main = styled.div`
  width: 39.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5rem;
  margin-top: 8.563rem;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Details = styled(motion.div)``;

const SubText = styled(NavText)`
  color: rgb(var(--sky));
  margin-bottom: 0.688rem;
`;

const Description = styled.p`
  margin-top: 1.063rem;
  width: 444px;
`;

const TechnologyPage: NextPage = (): JSX.Element => {
  const teches: Technology[] = data.technology;
  const [tech, setTech] = useState<Technology | undefined>([...teches].shift());

  const techHandler = (item: string): void => {
    setTech(teches.find((tech: Technology): boolean => tech.name === item));
  };

  return (
    <Layout title="Technology" description="Space tourism technology page" image={bg}>
      <Wrapper header={{ index: "03", title: "Space Launch 101" }}>
        <AnimatePresence mode="wait" initial={false}>
          {tech && (
            <Content key={tech.name}>
              <Main>
                <Dots>
                  {teches.map((technology: Technology, idx: number) => (
                    <Circle
                      onClick={() => techHandler(technology.name)}
                      key={idx}
                      size="5rem"
                      active={technology.name === tech.name}
                    >
                      {idx + 1}
                    </Circle>
                  ))}
                </Dots>
                <Details
                >
                  <SubText
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "linear", duration: .4 }}
                  >
                    The Terminology...
                  </SubText>
                  <motion.h3
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ type: "linear", duration: .4, delay: .1 }}
                  >
                    {tech.name}
                  </motion.h3>
                  <Description
                    as={motion.p}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "linear", duration: .4, delay: .2 }}
                  >
                    {tech.description}
                  </Description>
                </Details>
              </Main>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "linear", duration: .4, delay: .3 }}
              >
                <Image src={filterImage(tech.images.portrait)} width={515} height={517} priority />
              </motion.div>
            </Content>
          )}
        </AnimatePresence>
      </Wrapper>
    </Layout>
  );
};

export default TechnologyPage;
