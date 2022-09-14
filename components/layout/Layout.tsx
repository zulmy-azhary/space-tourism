import styled from "styled-components";
import { Navbar } from ".";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { device } from "../../helper";
import { useContext, useEffect } from "react";
import { BackgroundContext } from "../../context";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  transition: .5s;

  @media ${device.tablet.mediaQuery} {
    overflow-y: auto;
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  position: relative;
  padding-top: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  z-index: 1;

  @media ${device.tablet.mediaQuery} {
    padding: 6rem 0 0;
    align-items: stretch;
  }
  @media ${device.mobile.mediaQuery} {
    padding: 6rem 1.5rem 2.5rem;
  }
`;

const bgVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const contentVariants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

// Main Layout Props
interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps): JSX.Element => {
  const { background, setPath } = useContext(BackgroundContext);

  useEffect(() => {
    setPath(title.toLowerCase());
  }, [title]);
  
  return (
    <Container>
      <Head>
        <title>Space Tourism | {title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Background
        as={motion.div}
        variants={bgVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: .4 }}
      >
        <Image src={background} layout="fill" alt="background-image" />
      </Background>
      <header>
        <Navbar />
      </header>
      <Content
        as={motion.main}
        variants={contentVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: .5 }}
      >
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
