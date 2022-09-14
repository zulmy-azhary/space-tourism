import styled, { css } from "styled-components";
import { device } from "../../../helper";
import type { Crew } from "../../../types";

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.5rem;

  @media ${device.mobile.mediaQuery} {
    column-gap: 1rem;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  width: .938rem;
  height: .938rem;
  border-radius: 50%;
  background-color: rgba(var(--white), ${({ active }) => active ? "1" : ".17"});
  cursor: pointer;

  ${({ active }) => !active && css`
    &:hover {
      background-color: rgba(var(--white), .5);
    }
  `}

  @media ${device.tablet.mediaQuery} {
    width: .625rem;
    height: .625rem;
  }
`;

interface Props {
  crews: Crew[];
  crew: Crew;
  handler: (item: string) => void;
}

const Dots = ({ crews, crew, handler}: Props): JSX.Element => {
  return (
    <DotsWrapper>
      {crews.map((item: Crew) => (
        <Dot key={item.name} onClick={() => handler(item.name)} active={item.name === crew.name} />
      ))}
    </DotsWrapper>
  )
}

export default Dots