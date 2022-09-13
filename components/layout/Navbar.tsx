import LogoBrand from "../../assets/logo.svg";
import Link from "next/link";
import styled, { css } from "styled-components";
import { NavText } from "../styles/SharedStyles";
import { dataSection as data, device } from "../../helper";
import { useRouter } from "next/router";
import { useContext } from "react";
import HamburgerMenu from "../../assets/icon-hamburger.svg";
import CloseMenu from "../../assets/icon-close.svg";
import { MediaContext, ToggleContext } from "../../context";

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

  @media ${device.tablet.mediaQuery} {
    margin-top: 0;
    padding-left: 39px;

    &:before {
      display: none;
    }
  }

  @media ${device.mobile.mediaQuery} {
    padding: 0 24px;
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

  @media ${device.tablet.mediaQuery} {
    padding-left: 50px;
    padding-right: 50px;
    column-gap: 37px;
  }
`;

const Logo = styled(LogoBrand)`
  cursor: pointer;
  scale: .83;
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
  const { mobile, tablet } = useContext(MediaContext);
  const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <NavContainer>
      <Logo />
      {!mobile && <NavList>
        {data.map((item: Record<string, string>) => (
          <li key={item.index}>
            <Link passHref href={item.url}>
              <NavItem pathName={router.pathname}>
                {!tablet && <NavNumber>{item.index}</NavNumber>}
                <NavText>{item.name}</NavText>
              </NavItem>
            </Link>
          </li>
        ))}
      </NavList>}
      {mobile &&
        <div onClick={() => setToggle(prev => !prev)}>
          {toggle ? <CloseMenu /> : <HamburgerMenu />}
        </div>
      }
    </NavContainer>
  );
};



export default Navbar;