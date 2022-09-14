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
  margin-bottom: .688rem;

  @media ${device.tablet.mediaQuery} {
    margin-bottom: 1rem;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: .875rem;
    letter-spacing: 2.36px;
    margin-bottom: .563rem;
  }
`;

const Description = styled.p`
  margin-top: 1.063rem;
  width: 27.75rem;

  @media ${device.tablet.mediaQuery} {
    margin-top: 1rem;
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