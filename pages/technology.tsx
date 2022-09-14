import type { NextPage } from "next";
import { Layout } from "../components/layout";
import data from "../json/data.json";
import type { Technology } from "../types";
import { useContext, useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/ui/Wrapper";
import Image from "next/image";
import { device, filterImage, mediaState } from "../helper";
import { AnimatePresence, motion } from "framer-motion";
import { MediaContext } from "../context";
import { Details, Dots } from "../components/ui/technology";

const Content = styled.div`
  display: flex;
  margin-top: 1.625rem;
  justify-content: space-between;
  align-items: center;
  margin-left: 10.313rem;

  @media ${device.tablet.mediaQuery} {
    flex-direction: column-reverse;
    margin-left: 0;
    margin-top: 3.75rem;
  }

  @media ${device.mobile.mediaQuery} {
    margin-top: 2rem;
  }
`;

const Main = styled.div`
  width: 630px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5rem;
  margin-top: 8.563rem;

  @media ${device.tablet.mediaQuery} {
    flex-direction: column;
    margin-top: 3.5rem;
    row-gap: 2.75rem;
    padding: 0 6rem;
  }

  @media ${device.mobile.mediaQuery} {
    width: 100%;
    padding: 0;
    margin-top: 2.125rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  @media ${device.mobile.mediaQuery} {
    margin: 0 -1.5rem;
  }
`;

const TechnologyPage: NextPage = (): JSX.Element => {
  const teches: Technology[] = data.technology;
  const [tech, setTech] = useState<Technology | undefined>([...teches].shift());
  const { tablet } = useContext(MediaContext);
  const width = mediaState(375, 768, 515);
  const height = mediaState(170, 310, 517);

  const techHandler = (item: string): void => {
    setTech(teches.find((tech: Technology): boolean => tech.name === item));
  };

  return (
    <Layout title="Technology" description="Space tourism technology page">
      <Wrapper header={{ index: "03", title: "Space Launch 101" }}>
        <AnimatePresence mode="wait" initial={false}>
          {tech && (
            <Content key={tech.name}>
              <Main>
                <Dots teches={teches} tech={tech} handler={techHandler} />
                <Details name={tech.name} description={tech.description} />
              </Main>
              <ImageWrapper
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "linear", duration: .4, delay: .3 }}
              >
                <Image src={filterImage(tablet ? tech.images.landscape : tech.images.portrait )} width={width} height={height} priority />
              </ImageWrapper>
            </Content>
          )}
        </AnimatePresence>
      </Wrapper>
    </Layout>
  );
};

export default TechnologyPage;
