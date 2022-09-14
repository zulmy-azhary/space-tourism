import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { device } from "../../../helper";
import type { Destination } from "../../../types";
import { NavText } from "../../styles/SharedStyles";

const List = styled.ul`
  height: 2.125rem;
  display: flex;
  column-gap: 2.25rem;
  align-items: center;
  margin-bottom: 2.313rem;

  @media ${device.tablet.mediaQuery} {
    justify-content: center;
    margin-bottom: 2rem;
  }

  @media ${device.mobile.mediaQuery} {
    column-gap: 1.688rem;
    margin-bottom: 1.25rem;
  }
`;

const Item = styled(NavText)<{ selected?: string, name: string }>`
  position: relative;
  color: rgb(var(--${({ selected, name }) => selected === name ? "white" : "sky"}));
  height: 100%;
  text-align: center;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${({ selected, name }) => selected === name && "rgb(var(--white))"};
    bottom: 0;
    left: 0;
    transition: .2s;
  }

  ${({ selected, name }) => selected !== name && css`
    &:hover:after {
      background-color: rgba(var(--white), .5);
    }
  `};

  @media ${device.tablet.mediaQuery} {
    font-size: 1rem;
    letter-spacing: 2.7px;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: .875rem;
    letter-spacing: 2.36px;
  }
`;

interface Props {
  destinations: Destination[];
  handler: (name: string) => void;
  selected: string | undefined;
}

const TabList = ({ destinations, handler, selected }: Props): JSX.Element => {

  return (
    <List>
      {destinations.map((destination: Destination, idx: number) => (
        <Item
          key={idx}
          as={motion.li}
          selected={selected}
          name={destination.name}
          onClick={() => handler(destination.name)}
        >
          {destination.name}
        </Item>
      ))}
    </List>
  );
};

export default TabList;
