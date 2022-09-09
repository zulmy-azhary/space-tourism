import { motion } from "framer-motion";
import styled from "styled-components";
import { SubTitle, Title } from "../../styles/SharedStyles";

const InfoWrapper = styled.div`
  display: flex;
  column-gap: 4.938rem;
  position: relative;
  padding-top: 1.75rem;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #383b4b;
    top: 0;
    left: 0;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
`;

interface Props {
  distance: string;
  travel: string;
}

const mVariants = {
  out: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
}

const Info = ({distance, travel}: Props): JSX.Element => {
  return (
    <InfoWrapper>
      <Item as={motion.div} variants={mVariants} initial="out" animate="in" exit="out" transition={{ type: "linear", duration: 0.4 }}>
        <SubTitle>Avg. Distance</SubTitle>
        <Title>{distance}</Title>
      </Item>
      <Item as={motion.div} variants={mVariants} initial="out" animate="in" exit="out" transition={{ type: "linear", duration: 0.4, delay: 0.2 }}>
        <SubTitle>Est. Travel Time</SubTitle>
        <Title>{travel}</Title>
      </Item>
    </InfoWrapper>
  )
}

export default Info;