import styled, { css } from "styled-components";
import type { Destination } from "../../../types";
import { NavText } from "../../styles/SharedStyles";

const List = styled.ul`
  height: 2.125rem;
  display: flex;
  column-gap: 2.25rem;
  align-items: center;
  margin-bottom: 2.313rem;
`;

const Item = styled(NavText)<{selected: string | undefined, name: string}>`
  position: relative;
  color: rgb(var(--${props => props.selected === props.name ? "white" : "sky"}));
  height: 100%;
  text-align: center;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${props => props.selected === props.name && "rgb(var(--white))"};
    bottom: 0;
    left: 0;
  }

  ${props => props.selected !== props.name && css`
    &:hover:after {
      background-color: rgba(var(--white), .5);
    }
  `};
`;

interface Props {
  data: Destination[];
  handler: (name: string) => void;
  selected: string | undefined;
}

const TabList = ({ data, handler, selected }: Props): JSX.Element => {

  return (
    <List>
      {data.map((destination: Destination, idx: number) => (
        <Item selected={selected} name={destination.name} onClick={() => handler(destination.name)} key={idx}>
          {destination.name}
        </Item>
      ))}
    </List>
  );
};

export default TabList;
