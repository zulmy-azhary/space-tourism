import LogoBrand from "../../assets/etc/logo.svg";
import Link from "next/link";
import styled from "styled-components";
import { NavText } from "../styles/SharedStyles";

const NavContainer = styled.nav`
	position: absolute;
	margin-top: 40px;
	width: 100%;
	min-width: 100%;
	height: 96px;
	padding-left: 55px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:before {
		content: "";
		position: absolute;
		height: 1px;
		width: 473px;
		background-color: rgba(var(--white), .25);
		left: 170px;
		z-index: 2;
	}
`;

const NavList = styled.ul`
	list-style: none;
	display: flex;
	column-gap: 48px;
	padding-left: 120px;
	padding-right: 165px;
	height: 100%;
	align-items: center;
	background: rgba(var(--white), .04);
	backdrop-filter: blur(81.55px);
`;

const Logo = styled(LogoBrand)`
	cursor: pointer;
`;

const NavItem = styled.a`
	position: relative;
	display: flex;
	column-gap: 11px;
	text-decoration: none;
	height: 100%;
	align-items: center;

	&:hover:after {
		content: "";
		position: absolute;
		height: 3px;
		width: 100%;
		background-color: rgba(var(--white), .5);
		bottom: 0;
		left: 0;
	}
`;

const NavNumber = styled(NavText)`
	font-weight: bold;
`;

const Navbar = (): JSX.Element => {
	return (
		<NavContainer>
			<Logo />
			<NavList>
				<Link passHref href={"/"}>
					<NavItem>
						<NavNumber>00</NavNumber>
						<NavText>Home</NavText>
					</NavItem>
				</Link>
				<Link passHref href={"/destination"}>
					<NavItem>
						<NavNumber>01</NavNumber>
						<NavText>Destination</NavText>
					</NavItem>
				</Link>
				<Link passHref href={"/crew"}>
					<NavItem>
						<NavNumber>02</NavNumber>
						<NavText>Crew</NavText>
					</NavItem>
				</Link>
				<Link passHref href={"/technology"}>
					<NavItem>
						<NavNumber>03</NavNumber>
						<NavText>Technology</NavText>
					</NavItem>
				</Link>
			</NavList>
		</NavContainer>
	);
};

export default Navbar;
