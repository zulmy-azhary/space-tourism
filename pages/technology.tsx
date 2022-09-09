import type { NextPage } from "next";
import { Layout } from "../components/layout";
import bg from "../assets/technology/background-technology-desktop.jpg";
import { Wrapper } from "../components/ui";
import data from "../json/data.json";
import type { Technology } from "../types";
import { useState } from "react";
import styled from "styled-components";
import { Circle } from "../components/utils";
import { NavText } from "../components/styles/SharedStyles";

const Content = styled.div`
  margin-top: 8.563rem;
`;

const Main = styled.div`
  width: 39.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5rem;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Details = styled.div`

`;

const SubText = styled(NavText)`
  color: rgb(var(--sky));
  margin-bottom: .688rem;
`;

const Description = styled.p`
  margin-top: 1.063rem;
`;

const TechnologyPage: NextPage = (): JSX.Element => {
  const teches: Technology[] = data.technology;
  const [tech, setTech] = useState<Technology | undefined>([...teches].shift());

  return (
    <Layout title="Technology" description="Space tourism technology page" image={bg}>
      <Wrapper header={{ index: "03", title: "Space Launch 101" }}>
        <Content>
          <Main>
            <Dots>
              {teches.map((_, idx: number) => {
                if (idx === 0) return (
                  <Circle key={idx} size="5rem" type="primary">
                    {idx + 1}
                  </Circle>
                )
                return (
                  <Circle key={idx} size="5rem" type="secondary">
                    {idx + 1}
                  </Circle>
              )})}
            </Dots>
            <Details>
              <SubText>The Terminology...</SubText>
              <h3>{tech?.name}</h3>
              <Description>{tech?.description}</Description>
            </Details>
          </Main>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default TechnologyPage;