import styled from "styled-components";
import type { Data, Destination } from "../../../types";
import { NavText } from "../../styles/SharedStyles";

const List = styled.ul`
  height: 2.125rem;
  display: flex;
  column-gap: 2.25rem;
  align-items: center;
  margin-bottom: 2.313rem;
`;

const Item = styled(NavText)`
  position: relative;
  color: rgb(var(--sky));
  height: 100%;
  text-align: center;
  cursor: pointer;

  &:hover:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: rgb(var(--white));
    bottom: 0;
    left: 0;
  }
`;

interface Props {
  data: Data;
  handler: (name: string) => void;
}

const TabList = ({ data, handler }: Props): JSX.Element => {
  return (
    <List>
      {data.destinations.map((destination: Destination, idx: number) => (
        <Item onClick={() => handler(destination.name)} key={idx}>
          {destination.name}
        </Item>
      ))}
    </List>
  );
};

export default TabList;
