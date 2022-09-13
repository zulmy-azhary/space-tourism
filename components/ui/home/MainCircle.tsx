import { forwardRef } from "react";
import styled from "styled-components";
import { device, mediaState } from "../../../helper";

const Wrapper = styled.div<WrapperStyle>`
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
`;

interface WrapperStyle {
  size?: string | number;
}

type Props = WrapperStyle & {
  children: React.ReactNode;
  onClick?: () => void;
};

const MainCircle = forwardRef<HTMLDivElement, Props>(({ children, onClick }, ref): JSX.Element => {
  const size: string | number = mediaState("150px", "242px", "274px");

  return (
    <Wrapper size={size} onClick={onClick} ref={ref}>
      <Text>{children}</Text>
    </Wrapper>
  )
});

export default MainCircle