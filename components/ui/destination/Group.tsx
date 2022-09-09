import styled from "styled-components";
import type { Destination } from "../../../types";
import TabList from "./TabList";
import Info from "./Info";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

const GroupWrapper = styled.div`
  width: fit-content;
`;

const Description = styled.p`
  margin-top: .875rem;
  margin-bottom: 3.375rem;
`;

interface Props {
  data: Destination[];
  item: Destination;
  handler: (item: string) => void;
  selected: string | undefined
}

const mVariants = {
  out: { x: 100, opacity: 0 },
  in: { x: 0, opacity: 1 },

}

const Group = ({ data, item, handler, selected }: Props): JSX.Element => {

  return (
    <GroupWrapper>
      <TabList data={data} handler={handler} selected={selected} />
      <motion.h2 variants={mVariants} initial="out" animate="in" exit="out" transition={{ type: "linear", duration: .4 }}>{item.name}</motion.h2>
      <Description as={motion.p} variants={mVariants} initial="out" animate="in" exit="out" transition={{ type: "linear", duration: .4, delay: .2 }}>{item.description}</Description>
      <Info distance={item.distance} travel={item.travel} />
    </GroupWrapper>
  )
}

export default Group;