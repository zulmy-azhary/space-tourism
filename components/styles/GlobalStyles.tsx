import { createGlobalStyle } from "styled-components";
import { device } from "../../helper";

const GlobalStyles = createGlobalStyle`
  :root {
    /* #0B0D17 */
    --black: 11, 13, 23;
    /* #D0D6F9 */
    --sky: 208, 214, 249;
    /* #FFF */
    --white: 255, 255, 255;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: normal;
  }

  html,
  body {
    /* 'Bellefair' For Heading */
    /* 'Barlow' Main Font */
    /* 'Barlow Condensed' For Subheading 2, Nav Text, etc. */
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: rgb(var(--black));
    color: rgb(var(--white));
  }

  /* Font Family & Font Color */
  h1, h2, h3, h4 {
    font-family: 'Bellefair';
    color: rgb(var(--white));
  }

  h1 {
    font-size: 150px;
  }

  h2 {
    font-size: 100px;
  }

  h3 {
    font-size: 56px;
  }

  h4 {
    font-size: 32px;
    letter-spacing: 2px;
  }

  h5 {
    font-family: 'Barlow Condensed';
    color: rgb(var(--sky));
    font-size: 28px;
    letter-spacing: 4.72px; // 4.75 in design system
  }

  /* Line Height */
  h1, h2, h3, h4, h5 {
    line-height: auto;
    text-transform: uppercase;
  }
  
  p {
    font-size: 18px;
    color: rgb(var(--sky));
    line-height: 32px;
  }

  li {
    width: fit-content;
    height: 100%;
    list-style: none;
  }

  @media ${device.tablet.mediaQuery} {
    h2 {
      font-size: 80px;
    }

    h3 {
      font-size: 40px;
    }

    h4 {
      font-size: 24px;
    }

    h5 { 
      font-size: 20px;
      letter-spacing: 3.38px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media ${device.mobile.mediaQuery} {
    h1 {
      font-size: 80px;
    }
    
    h2 {
      font-size: 56px;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 20px;
      letter-spacing: 1.25px;
    }

    h5 {
      font-size: 16px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */
`;

export default GlobalStyles;