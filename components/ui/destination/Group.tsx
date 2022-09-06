import styled from "styled-components";
import type { Data, Destination } from "../../../types";
import TabList from "./TabList";
import Image from "next/image";
import img from "/assets/destination/image-moon.png";
import Info from "./Info";

const ImageWrapper = styled.div`
  width: 100%;
  min-width: 27.813rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupWrapper = styled.div`
  width: fit-content;
`;

const Description = styled.p`
  margin-top: .875rem;
  margin-bottom: 3.375rem;
`;

interface Props {
  data: {
    data: Data | undefined;
    isValidating: boolean;
    error?: boolean;
  };
  item: Destination | undefined;
  handler: (item: Destination) => void;
}

const Group = ({ data, item, handler }: Props): JSX.Element => {
  return (
    <>
      {item && (
        <>
          <ImageWrapper>
            <Image width={445} height={445} src={img} />
          </ImageWrapper>
          <GroupWrapper>
            <TabList data={data} handler={handler} />
            <h2>{item.name}</h2>
            <Description>{item.description}</Description>
            <Info distance={item.distance} travel={item.travel} />
          </GroupWrapper>
        </>
      )}
    </>
  )
}

export default Group;