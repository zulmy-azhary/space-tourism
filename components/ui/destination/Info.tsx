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

const Info = ({distance, travel}: Props): JSX.Element => {
  return (
    <InfoWrapper>
      <Item>
        <SubTitle>Avg. Distance</SubTitle>
        <Title>{distance}</Title>
      </Item>
      <Item>
        <SubTitle>Est. Travel Time</SubTitle>
        <Title>{travel}</Title>
      </Item>
    </InfoWrapper>
  )
}

export default Info;