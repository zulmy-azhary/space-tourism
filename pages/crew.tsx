import { Layout } from "../components/layout";
import bg from "../assets/crew/background-crew-desktop.jpg";
import type { NextPage } from "next";
import { Wrapper } from "../components/ui";

const Crew: NextPage = (): JSX.Element => {
  return (
    <Layout title="Crew" description="Space tourism crew page" image={bg}>
      <Wrapper header={{ index: "02", title: "Meet Your Crew" }}>

      </Wrapper>
    </Layout>
  );
};

export default Crew;