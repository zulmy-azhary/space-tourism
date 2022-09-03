import styled from "styled-components";
import { Navbar } from "./";

interface MainLayoutProps {
	image: {
		src: string;
	};
	children: React.ReactNode;
}

interface ContainerProps {
	bg: string;
}

const Container = styled.main<ContainerProps>`
	position: relative;
	overflow: hidden;
	background: url(${props => props.bg}) no-repeat;
	background-size: cover; //Original using contain
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

const Content = styled.div`
	padding-left: 165px;
	padding-right: 165px;
	padding-top: 136px;
`;

const MainLayout: React.FC<MainLayoutProps> = ({ image, children }) => {
	return (
		<Container bg={image.src}>
			<Navbar />
			<Content>{children}</Content>
		</Container>
	);
};

export default MainLayout;
