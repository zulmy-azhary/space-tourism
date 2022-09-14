import styled from "styled-components";
import { device } from "../../helper";

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
  font-size: 1rem;
  letter-spacing: 2.7px;
  line-height: auto;
  text-transform: uppercase;

  @media ${device.tablet.mediaQuery} {
    font-size: .875rem;
    letter-spacing: 2.36px;
  }

  @media ${device.mobile.mediaQuery} {
    font-size: 1rem;
    letter-spacing: 2.36px;
  }
`;

export { Title, SubTitle, NavText };
