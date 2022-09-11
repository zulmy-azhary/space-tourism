import styled from "styled-components";
import { Crew } from "../../../types";

const BioWrapper = styled.div`
  width: fit-content;
`;

const Role = styled.h4`
  color: rgba(var(--white), .542);
  mix-blend-mode: normal;
  margin-bottom: .938rem;
`;

const Description = styled.p`
  max-width: 27.75rem;
`;

interface Props {
  crew: Crew;
}

const Bio = ({ crew }: Props): JSX.Element => {
  return (
    <BioWrapper>
      <Role>{crew.role}</Role>
      <h3>{crew.name}</h3>
      <Description>{crew.bio}</Description>
    </BioWrapper>
  )
}

export default Bio;