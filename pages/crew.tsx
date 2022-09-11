import { Layout } from "../components/layout";
import bg from "/public/assets/crew/background-crew-desktop.jpg";
import type { NextPage } from "next";
import styled, { css } from "styled-components";
import data from "../json/data.json";
import type { Crew } from "../types";
import { useState } from "react";
import Wrapper from "../components/ui/Wrapper";
import { Bio } from "../components/ui/crew";
import { filterImage } from "../helper";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 165px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 9.625rem;
  row-gap: 5rem;
`;

const CrewPic = styled.div`
  align-self: flex-end;
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 165px;
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
`

const Dot = styled.div<{ active: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(var(--white), ${({ active }) => active ? "1" : ".17"});
  cursor: pointer;

  ${({ active }) => !active && css`
    &:hover {
      background-color: rgba(var(--white), .5);
    }
  `}
`;

const CrewPage: NextPage = (): JSX.Element => {
  const crews: Crew[] = data.crew;
  const [crew, setCrew] = useState<Crew | undefined>([...crews].shift());

  const crewHandler = (crewName: string): void => {
    setCrew(crews.find((crew: Crew) => crew.name === crewName));
  }
  
  return (
    <Layout title="Crew" description="Space tourism crew page" image={bg}>
      <Wrapper header={{ index: "02", title: "Meet Your Crew" }}>
        {crew && (
          <>
            <Content>
              <Main>
                <Bio crew={crew} />
                <DotsWrapper>
                  {crews.map((item: Crew) =>
                    <Dot key={item.name} onClick={() => crewHandler(item.name)} active={item.name === crew.name} />
                  )}
                </DotsWrapper>
              </Main>
              <CrewPic>
                <img src={filterImage(crew.images.png)} alt={crew.name} />
              </CrewPic>
            </Content>
          </>
        )}
      </Wrapper>
    </Layout>
  );
};

export default CrewPage;