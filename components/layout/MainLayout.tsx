import styled from "styled-components";
import { Navbar } from "./";
import { motion } from "framer-motion";
import Head from "next/head";

// Main Layout Props
interface MainLayoutProps {
	title: string;
	description?: string;
	image: {
		src: string;
	};
	children: React.ReactNode;
}

// Container Component Props
interface ContainerProps {
	bg: string;
}

const Container = styled.main<ContainerProps>`
	position: relative;
	/* overflow: hidden; */
	background: url(${(props) => props.bg}) no-repeat;
	background-size: cover; //Original using contain
	width: 100%;
	height: 100%;
	min-height: 100vh;
	transition: 0.5s;
`;

const Content = styled.div`
	padding-left: 165px;
	padding-right: 165px;
	padding-top: 136px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const MainLayout = ({ title, description, image, children }: MainLayoutProps): JSX.Element => {
	return (
		<Container bg={image.src}>
			<Head>
				<title>Space Tourism | {title}</title>
				{description && <meta name="description" content={description} />}
			</Head>
			<Navbar />
			<Content
				as={motion.div}
				variants={variants}
				initial="hidden"
				animate="enter"
				exit="exit"
				transition={{ type: "linear", duration: .4 }}
			>
				{children}
			</Content>
		</Container>
	);
};

export default MainLayout;
