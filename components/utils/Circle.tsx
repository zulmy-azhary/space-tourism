import styled, { css } from "styled-components";

const Wrapper = styled.div<WrapperStyle>`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: rgb(var(--${props => props.active ? "white" : "black" }));
  color: rgb(var(--${props => props.active ? "black" : "white"}));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .2s;

  ${props => !props.active && css`
    border: 1px solid rgba(var(--white), .25);

    &:hover {
      border-color: rgb(var(--white));
    }
  `}
  
`;

const Text = styled.h4<WrapperStyle>`
  color: rgb(var(--${props => props.active ? "black" : "white"}));
`;

interface WrapperStyle {
  size?: string;
  active: boolean;
}

type Props = WrapperStyle & {
  children: React.ReactNode;
  onClick?: () => void;
};

const Circle = ({ size, active, children, onClick }: Props): JSX.Element => {
  return (
    <Wrapper size={size} active={active} onClick={onClick}>
      <Text active={active}>{children}</Text>
    </Wrapper>
  )
}

export default Circle