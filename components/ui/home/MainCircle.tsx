import { forwardRef } from "react";
import styled from "styled-components";
import { device, mediaState } from "../../../helper";

const Wrapper = styled.a<WrapperStyle>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .2s;
  position: relative;
  z-index: 2;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    background-color: rgba(var(--white), .1036);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    z-index: -1;
    transition: .2s;
  }

  &:hover:after {
    top: -30%;
    right: -30%;
    bottom: -30%;
    left: -30%;
  }

  @media ${device.tablet.mediaQuery} {
    &:hover:after {
      scale: .85;
    }
  }

  @media ${device.mobile.mediaQuery} {
    &:hover:after {
      scale: 1.1;
    }
  }
`;

const Text = styled.h4`
  color: rgb(var(--type));

  @media ${device.tablet.mediaQuery} {
    font-size: 32px;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: 20px;
  }
`;

interface WrapperStyle {
  size?: string | number;
}

type Props = WrapperStyle & {
  text: string;
  onClick?: () => void;
  href?: string;
};

const MainCircle = forwardRef<HTMLAnchorElement, Props>(({ text, onClick, href }, ref): JSX.Element => {
  const size: string | number = mediaState("150px", "242px", "274px");

  return (
    <Wrapper href={href} size={size} onClick={onClick} ref={ref}>
      <Text>{text}</Text>
    </Wrapper>
  )
});

export default MainCircle;