import type { NextPage } from "next";
import { Layout } from "../components/layout";
import bg from "../assets/technology/background-technology-desktop.jpg";
import { Wrapper } from "../components/ui";

const Technology: NextPage = (): JSX.Element => {
  return (
    <Layout title="Technology" description="Space tourism technology page" image={bg}>
      <Wrapper header={{ index: "03", title: "Space Launch 101" }}>

      </Wrapper>
    </Layout>
  );
};

export default Technology;