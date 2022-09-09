import styled from "styled-components";
import { Navbar } from ".";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const Container = styled.main`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  transition: .5s;
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
  padding-left: 165px;
  padding-right: 165px;
  padding-top: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const bgVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

// Main Layout Props
interface LayoutProps {
  title: string;
  description?: string;
  image: {
    src: string;
  };
  children: React.ReactNode;
}

const Layout = ({ title, description, image, children }: LayoutProps): JSX.Element => {
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
        <Image src={image.src} layout="fill" />
      </Background>
      <Navbar />
      <Content
        as={motion.div}
        variants={variants}
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
