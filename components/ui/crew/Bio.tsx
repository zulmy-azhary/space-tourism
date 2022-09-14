import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../../helper";

const BioWrapper = styled.div`
  width: fit-content;
  min-height: fit-content;
`;

const Role = styled(motion.h4)`
  color: rgba(var(--white), .542);
  mix-blend-mode: normal;
  margin-bottom: .938rem;

  @media ${device.tablet.mediaQuery} {
    margin-bottom: .5rem;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: 1rem;
  }
`;

const Description = styled(motion.p)`
  max-width: 27.75rem;
  margin-top: 1.688rem;

  @media ${device.tablet.mediaQuery} {
    max-width: 100%;
    margin-top: 1rem;
  }
`;

interface Props {
  role: string;
  name: string;
  bio: string;
}

const Bio = ({ role, name, bio }: Props): JSX.Element => {
  return (
    <BioWrapper>
      <Role
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ type: "linear", duration: 0.4 }}
      >
        {role}
      </Role>
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type: "linear", duration: 0.4, delay: .1 }}
      >
        {name}
      </motion.h3>
      <Description
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ type: "linear", duration: 0.4, delay: .2 }}
      >
        {bio}
      </Description>
    </BioWrapper>
  );
};

export default Bio;
