import LogoBrand from "../../assets/logo.svg";
import Link from "next/link";
import styled, { css } from "styled-components";
import { NavText } from "../styles/SharedStyles";
import { dataSection as data } from "../../helper";
import { useRouter } from "next/router";

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
  z-index: 9999;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 473px;
    background-color: rgba(var(--white), 0.25);
    mix-blend-mode: normal;
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
  background: rgba(var(--white), 0.04);
  backdrop-filter: blur(81.55px);
`;

const Logo = styled(LogoBrand)`
  cursor: pointer;
`;

const NavItem = styled.a<{ pathName: string }>`
  position: relative;
  display: flex;
  column-gap: 11px;
  text-decoration: none;
  height: 100%;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${({ href, pathName }) =>
    href === pathName && "rgb(var(--white))"};
    bottom: 0;
    left: 0;
    transition: .2s;
  }
  ${({ href, pathName }) => href !== pathName && css`
    &:hover:after {
      background-color: rgba(var(--white), 0.5);
    }
  `}
`;

const NavNumber = styled(NavText)`
  font-weight: bold;
`;

const Navbar = (): JSX.Element => {
  const router = useRouter();

  return (
    <NavContainer>
      <Logo />
      <NavList>
        {data.map((item: Record<string, string>) => (
          <li key={item.index}>
            <Link passHref href={item.url}>
              <NavItem pathName={router.pathname}>
                <NavNumber>{item.index}</NavNumber>
                <NavText>{item.name}</NavText>
              </NavItem>
            </Link>
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
};



export default Navbar;