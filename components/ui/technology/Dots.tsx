import styled from "styled-components";
import { device, mediaState } from "../../../helper";
import type { Technology } from "../../../types";
import { Circle } from ".";

const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media ${device.tablet.mediaQuery} {
    flex-direction: row;
    column-gap: 1rem;
  }
`;

interface Props {
  teches: Technology[];
  tech: Technology;
  handler: (item: string) => void;
}

const Dots = ({ teches, tech, handler }: Props): JSX.Element => {
  const size: string | number = mediaState("40px", "60px", "80px");

  return (
    <DotsWrapper>
        {teches.map((technology: Technology, idx: number): JSX.Element => (
          <Circle
            onClick={() => handler(technology.name)}
            key={idx}
            size={size}
            active={technology.name === tech.name}
          >
            {idx + 1}
          </Circle>
        ))}
    </DotsWrapper>
  )
}

export default Dots;