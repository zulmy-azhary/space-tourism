import styled, { css } from "styled-components";
import { device } from "../../../helper";
import type { Crew } from "../../../types";

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;

  @media ${device.mobile.mediaQuery} {
    column-gap: 16px;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(var(--white), ${({ active }) => active ? "1" : ".17"});
  cursor: pointer;

  ${({ active }) => !active && css`
    &:hover {
      background-color: rgba(var(--white), .5);
    }
  `}

  @media ${device.tablet.mediaQuery} {
    width: 10px;
    height: 10px;
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