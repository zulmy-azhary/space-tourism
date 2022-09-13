import { Layout } from "../components/layout";
import type { NextPage } from "next";
import styled, { css } from "styled-components";
import data from "../json/data.json";
import type { Crew } from "../types";
import { useState } from "react";
import Wrapper from "../components/ui/Wrapper";
import { Bio, Dots } from "../components/ui/crew";
import { device, filterImage } from "../helper";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 165px;

  @media ${device.tablet.mediaQuery} {
    flex-direction: column;
    padding-left: 0;
    text-align: center;
    margin: 0 80px;
    row-gap: 66px;
  }

  @media ${device.mobile.mediaQuery} {
    flex-direction: column-reverse;
    margin: 32px 0 0;
    row-gap: 32px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 154px;
  row-gap: 120px;

  @media ${device.tablet.mediaQuery} {
    margin-top: 60px;
    row-gap: 40px;
    align-items: center;
  }

  @media ${device.mobile.mediaQuery} {
    flex-direction: column-reverse;
    margin-top: 0;
    row-gap: 32px;
  }
`;

const CrewPic = styled.div`
  align-self: flex-end;
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 165px;
  z-index: -1;

  @media ${device.tablet.mediaQuery} {
    position: relative;
    width: 100%;
    right: 0;
    height: 512px;

    img {
      position: absolute;
      max-width: 100%;
      height: 512px;
      margin: 0 auto;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }

  @media ${device.mobile.mediaQuery} {
    height: 250px;

    img {
      position: static;
      height: 250px;
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
        {crew && (
          <Content>
            <Main>
              <Bio role={crew.role} name={crew.name} bio={crew.bio} />
              <Dots crews={crews} crew={crew} handler={crewHandler} />
            </Main>
            <CrewPic>
              <img src={filterImage(crew.images.png)} alt={crew.name} />
            </CrewPic>
          </Content>
        )}
      </Wrapper>
    </Layout>
  );
};

export default CrewPage;