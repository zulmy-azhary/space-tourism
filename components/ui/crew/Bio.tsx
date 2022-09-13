import styled from "styled-components";
import { device } from "../../../helper";

const BioWrapper = styled.div`
  width: fit-content;
  min-height: fit-content;
`;

const Role = styled.h4`
  color: rgba(var(--white), .542);
  mix-blend-mode: normal;
  margin-bottom: 15px;

  @media ${device.tablet.mediaQuery} {
    margin-bottom: 8px;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: 16px;
  }
`;

const Description = styled.p`
  max-width: 27.75rem;
  margin-top: 27px;

  @media ${device.tablet.mediaQuery} {
    max-width: 100%;
    margin-top: 16px;
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
      <Role>{role}</Role>
      <h3>{name}</h3>
      <Description>{bio}</Description>
    </BioWrapper>
  )
}

export default Bio;