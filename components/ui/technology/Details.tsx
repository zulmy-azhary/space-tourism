import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../../helper";
import { NavText } from "../../styles/SharedStyles";

const DetailsWrapper = styled(motion.div)`
  @media ${device.tablet.mediaQuery} {
    text-align: center;
  }
`;

const SubText = styled(NavText)`
  color: rgb(var(--sky));
  margin-bottom: 11px;

  @media ${device.tablet.mediaQuery} {
    margin-bottom: 16px;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: 14px;
    letter-spacing: 2.36;
    margin-bottom: 9px;
  }
`;

const Description = styled.p`
  margin-top: 17px;
  width: 444px;

  @media ${device.tablet.mediaQuery} {
    margin-top: 16px;
    width: 100%;
  }
`;

interface Props {
  name: string;
  description: string;
}

const Details = ({ name, description }: Props): JSX.Element => {
  return (
    <DetailsWrapper>
      <SubText
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type: "linear", duration: .4 }}
      >
        The Terminology...
      </SubText>
      <motion.h3
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ type: "linear", duration: .4, delay: .1 }}
      >
        {name}
      </motion.h3>
      <Description
        as={motion.p}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type: "linear", duration: .4, delay: .2 }}
      >
        {description}
      </Description>
    </DetailsWrapper>
  )
}

export default Details;