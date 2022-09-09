import { Layout } from "../components/layout";
import bg from "../assets/crew/background-crew-desktop.jpg";
import type { NextPage } from "next";
import { Bio, Wrapper } from "../components/ui";
import styled from "styled-components";
import data from "../json/data.json";
import { Crew } from "../types";
import { useState } from "react";
import Image from "next/image";
import img from "../assets/crew/image-douglas-hurley.png";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CrewPic = styled.div`
  align-self: flex-end;
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Crew: NextPage = (): JSX.Element => {
  const [crew, setCrew] = useState<Crew>([...data.crew].shift() as Crew);
  
  return (
    <Layout title="Crew" description="Space tourism crew page" image={bg}>
      <Wrapper header={{ index: "02", title: "Meet Your Crew" }}>
        <Content>
          <>
            <Bio item={crew} />
            <CrewPic>
              <Image layout="intrinsic" src={img} />
            </CrewPic>
          </>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Crew;