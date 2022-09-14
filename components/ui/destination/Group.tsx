import styled from "styled-components";
import type { Destination } from "../../../types";
import TabList from "./TabList";
import Info from "./Info";
import { motion } from "framer-motion";
import { device } from "../../../helper";

const GroupWrapper = styled.div`
  width: fit-content;
`;

const Description = styled.p`
  margin: .875rem 0 3.375rem;

  @media ${device.tablet.mediaQuery} {
    margin: .5rem 0 3.063rem;
  }

  @media ${device.mobile.mediaQuery} {
    margin: 1px 0 2rem;
  }
`;

interface Props {
  destinations: Destination[];
  item: Destination;
  handler: (item: string) => void;
  selected: string | undefined
}

const Group = ({ destinations, item, handler, selected }: Props): JSX.Element => {

  return (
    <GroupWrapper>
      <TabList destinations={destinations} handler={handler} selected={selected} />
      <motion.h2
        variants={itemVariants}
        initial="out"
        animate="in"
        exit="out"
        transition={{ type: "linear", duration: .4 }}
      >
        {item.name}
      </motion.h2>
      <Description
        as={motion.p}
        variants={itemVariants}
        initial="out"
        animate="in"
        exit="out"
        transition={{ type: "linear", duration: .4, delay: .2 }}
      >
        {item.description}
      </Description>
      <Info distance={item.distance} travel={item.travel} />
    </GroupWrapper>
  )
}

const itemVariants = {
  out: { x: 100, opacity: 0 },
  in: { x: 0, opacity: 1 },
}

export default Group;