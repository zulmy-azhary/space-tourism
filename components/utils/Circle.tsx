import styled, { css } from "styled-components";

const Wrapper = styled.div<StyleType>`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: rgb(var(--${props => props.type === "primary" ? "white" : "black" }));
  color: rgb(var(--${props => props.type === "primary" ? "black" : "white"}));
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .2s;
  ${props => props.type === "secondary" && css`
    border: 1px solid rgba(var(--white), .25);
  `}

  &:hover {
    background-color: ${props => props.type === "primary" ? css`
      rgba(var(--white), .5);
    ` : css`
      rgba(var(--sky), .5);
    `}
  }
`;

const Text = styled.h4<StyleType>`
  color: rgb(var(--${props => props.type === "primary" ? "black" : "white"}));
`;

interface StyleType {
  size?: string;
  type: "primary" | "secondary";
}

type Props = StyleType & { children: React.ReactNode };

const Circle = ({ size, type, children }: Props): JSX.Element => {
  return (
    <Wrapper size={size} type={type}>
      <Text type={type}>{children}</Text>
    </Wrapper>
  )
}

export default Circle