import type { GetServerSideProps, NextPage } from "next";
import type { Data, Destination } from "../types";
import Image from "next/image";
import styled from "styled-components";
import bg from "../assets/destination/background-destination-desktop.jpg";
import { MainLayout } from "../components/layout";
import {
	Container,
	NavText,
	Header,
	HeaderNumber,
	HeaderName,
	SubTitle,
	Title,
} from "../components/styles/SharedStyles";
import img from "/assets/destination/image-moon.png";
import useSWR from "swr";
import { fetcher } from "../helper";

interface Props {
	apiUrl: string;
}

const MainContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 9.813rem;
	margin-left: 4.5rem;
`;

const Banner = styled.div`
	width: 100%;
	min-width: 27.813rem;
	text-align: center;
	flex-grow: 3;
`;

const Wrapper = styled.div`
	width: fit-content;
	flex-shrink: 1;
`;

const TabList = styled.ul`
	height: 2.125rem;
	display: flex;
	column-gap: 2.25rem;
	align-items: center;
	margin-bottom: 2.313rem;
`;

const Tab = styled(NavText)`
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

const Description = styled.p`
	margin-top: 0.875rem;
	margin-bottom: 3.375rem;
`;

const Info = styled.div`
	display: flex;
	column-gap: 4.938rem;
	position: relative;

	&:before {
		position: absolute;
		content: "";
		width: 100%;
		height: 1px;
		background-color: #383B4B;
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	padding-top: 1.75rem;
`;

const Destination: NextPage<Props> = ({ apiUrl }: Props): JSX.Element => {
	const { data, isValidating } = useSWR<Data>(`${apiUrl}/api/data`, fetcher);

	return (
		<MainLayout title="Destination" description="Space tourism destination page" image={bg}>
			<Container>
				{/* Header */}
				<Header>
					<HeaderNumber>01</HeaderNumber>
					<HeaderName>Pick Your Destination</HeaderName>
				</Header>

				{/* Content */}
				<MainContent>
					<Banner>
						<Image width={445} height={445} src={img} />
					</Banner>
					<Wrapper>
						<TabList>
							{!isValidating &&
								data?.destinations.map((destination: Destination, idx: number) => (
									<Tab key={idx}>{destination.name}</Tab>
								))}
						</TabList>
						<h2>Moon</h2>
						<Description>
							See our planet as you're never seen it before. A perfect relaxing trip
							away to help regain perspective and come back refreshed. Whilw you're
							there, take in some history by visiting the Luna 2 and Apollo 11 landing
							sites.
						</Description>
						<Info>
							<Item>
								<SubTitle>Avg. Distance</SubTitle>
								<Title>384,400 Km</Title>
							</Item>
							<Item>
								<SubTitle>Est. Travel Time</SubTitle>
								<Title>3 Days</Title>
							</Item>
						</Info>
					</Wrapper>
				</MainContent>
			</Container>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			apiUrl: process.env.API_URL,
		},
	};
};

export default Destination;
