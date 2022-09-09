import styled from "styled-components";
import { Crew } from "../../../types";

const BioWrapper = styled.div`
/* height: 100%; */
  width: fit-content;
  padding-top: 9.625rem;
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
  item: Crew;
}

const Bio = ({item}: Props): JSX.Element => {
  return (
    <BioWrapper>
      <Role>{item.role}</Role>
      <h3>{item.name}</h3>
      <Description>{item.bio}</Description>
    </BioWrapper>
  )
}

export default Bio;