import styled from "styled-components";

const Title = styled.div`
  font-family: "Bellefair";
  color: rgb(var(--white));
  font-size: 1.75rem; //28px
  line-height: auto;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  font-family: "Barlow Condensed";
  color: rgb(var(--sky));
  font-size: .875rem; //14px
  letter-spacing: 2.35px;
  line-height: auto;
  text-transform: uppercase;
`;

const NavText = styled.div`
  color: rgb(var(--white));
  font-family: "Barlow Condensed";
  font-size: 1rem; //16px
  letter-spacing: 2.7px;
  line-height: auto;
  text-transform: uppercase;
`;

// Just for Home Page
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4.5rem;
`;

// Inner Page
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

const Header = styled.div`
  display: flex;
  column-gap: 1.75rem;
  align-items: center;
`;

const SubHeading = styled.h5`
  color: rgba(var(--white), .25);
  mix-blend-mode: normal;
  font-weight: bold;
`;

const Heading = styled.h5`
  color: var(--white);
`;

export { HomeContainer, Container, Title, SubTitle, NavText, Header, SubHeading, Heading };
