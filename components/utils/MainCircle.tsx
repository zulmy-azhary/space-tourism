import styled from "styled-components";

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
`;

const Text = styled.h4`
  color: rgb(var(--type));
`;

interface WrapperStyle {
  size?: string;
}

type Props = WrapperStyle & {
  children: React.ReactNode;
  onClick?: () => void;
};

const MainCircle = ({ size, children, onClick }: Props): JSX.Element => {
  return (
    <Wrapper size={size} onClick={onClick}>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default MainCircle