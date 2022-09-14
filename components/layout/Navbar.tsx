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
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";

const NavContainer = styled.nav`
  position: fixed;
  margin-top: 2.5rem;
  width: 100%;
  min-width: 100%;
  height: 6rem;
  padding-left: 3.438rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;

  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 33%;
    background-color: rgba(var(--white), 0.25);
    mix-blend-mode: normal;
    left: 10.625rem;
    z-index: 2;
  }

  @media ${device.tablet.mediaQuery} {
    margin-top: 0;
    padding-left: 2.438rem;

    &:before {
      display: none;
    }
  }

  @media ${device.mobile.mediaQuery} {
    padding: 0 24px;
  }
`;

const NavList = styled(motion.ul)`
  list-style: none;
  display: flex;
  column-gap: 3rem;
  padding-left: 7.5rem;
  padding-right: 10.313rem;
  height: 100%;
  align-items: center;
  background: rgba(var(--white), 0.04);
  backdrop-filter: blur(5.097rem);

  @media ${device.tablet.mediaQuery} {
    padding-left: 3.125rem;
    padding-right: 3.125rem;
    column-gap: 2.313rem;
  }

  @media ${device.mobile.mediaQuery} {
    position: fixed;
    flex-direction: column;
    right: 0;
    top: 0;
    height: 100vh;
    width: 15.875rem;
    align-items: flex-start;
    padding: 7.375rem 0 0 2rem;
    row-gap: 2rem;

    li {
      width: 100%;
      height: fit-content;
    }
  }
`;

const Logo = styled(LogoBrand)`
  cursor: pointer;
  scale: .83;
`;

const NavItem = styled.a<{ pathName: string }>`
  position: relative;
  display: flex;
  column-gap: .688rem;
  text-decoration: none;
  height: 100%;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${({ href, pathName }) => href === pathName && "rgb(var(--white))"};
    bottom: 0;
    left: 0;
    transition: .2s;
  }

  ${({ href, pathName }) => href !== pathName && css`
    &:hover:after {
      background-color: rgba(var(--white), 0.5);
    }
  `}

  @media ${device.mobile.mediaQuery} {
    height: fit-content;
    width: 100%;

    &:after {
      width: 4px;
      height: 1.938rem;
      right: 0;
      left: auto;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const NavNumber = styled(NavText)`
  font-weight: bold;

  @media ${device.tablet.mediaQuery} {
    display: none;
  }
  
  @media ${device.mobile.mediaQuery} {
    display: block;
  }
`;

const ActionMenu = styled.div`
  position: relative;
  z-index: 9;
`;

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const { mobile } = useContext(MediaContext);
  const { toggle, setToggle } = useContext(ToggleContext);
  const menuRef = useClickOutside(toggle, () => setToggle(false));  

  return (
    <NavContainer>
      <Logo />
      <AnimatePresence initial={false}>
        {(!mobile || toggle) && (
          <NavList
            variants={navVariants}
            initial="hidden"
            animate="animate"
            exit="hidden"
            transition={{ ease: "easeInOut", duration: .4 }}
            ref={menuRef as React.RefObject<HTMLUListElement>}
          >
            {data.map((item: Record<string, string>, idx: number) => (
              <motion.li
                key={item.index}
                onClick={() => setToggle(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: 'tween', duration: .3, delay: idx * .15 }}
              >
                <Link passHref href={item.url}>
                  <NavItem pathName={router.pathname}>
                    <NavNumber>{item.index}</NavNumber>
                    <NavText>{item.name}</NavText>
                  </NavItem>
                </Link>
              </motion.li>
            ))}
          </NavList>
        )}
      </AnimatePresence>
      {mobile &&
        <ActionMenu onClick={() => setToggle(prev => !prev)}>
          {toggle ? <CloseMenu /> : <HamburgerMenu />}
        </ActionMenu>
      }
    </NavContainer>
  );
};

const navVariants = {
  hidden: { x: "50%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

export default Navbar;