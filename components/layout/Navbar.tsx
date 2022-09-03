import Logo from "../../assets/etc/logo.svg";
import Link from "next/link";
import styled from "styled-components";

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

const NavItemContainer = styled.a`
	position: relative;
	display: flex;
	column-gap: 11px;
	color: rgb(var(--white));
	font-family: "Barlow Condensed";
	letter-spacing: 2.7px;
	font-size: 16px;
	line-height: auto;
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

const NavItemNumber = styled.div`
	font-weight: bold;
`;

const NavItemName = styled.div`
	text-transform: uppercase;
`;

const Navbar = () => {
	return (
		<NavContainer>
			<Logo />
			<NavList>
				<Link passHref href={"/"}>
					<NavItemContainer>
						<NavItemNumber>00</NavItemNumber>
						<NavItemName>Home</NavItemName>
					</NavItemContainer>
				</Link>

				<Link passHref href={"/destination"}>
					<NavItemContainer>
						<NavItemNumber>01</NavItemNumber>
						<NavItemName>Destination</NavItemName>
					</NavItemContainer>
				</Link>

				<Link passHref href={"/crew"}>
					<NavItemContainer>
						<NavItemNumber>02</NavItemNumber>
						<NavItemName>Crew</NavItemName>
					</NavItemContainer>
				</Link>

				<Link passHref href={"/technology"}>
					<NavItemContainer>
						<NavItemNumber>03</NavItemNumber>
						<NavItemName>Technology</NavItemName>
					</NavItemContainer>
				</Link>
			</NavList>
		</NavContainer>
	);
};

export default Navbar;
