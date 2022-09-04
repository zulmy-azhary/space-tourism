import { createGlobalStyle } from "styled-components";

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

  h5 {
    font-family: 'Barlow Condensed';
    color: rgb(var(--sky));
  }
  
  p {
    font-size: 18px;
    color: rgb(var(--sky));
  }

  /* Font Styling */
  h1 {
    font-size: 9.375rem; //150px
  }

  h2 {
    font-size: 6.25rem; //100px
  }

  h3 {
    font-size: 3.5rem; //56px
  }

  h4 {
    font-size: 2rem; //32px
  }

  h5 {
    font-size: 1.75rem; //28px
    letter-spacing: 4.72px; // 4.75 in design system
  }

  /* Line Height */
  h1, h2, h3, h4, h5 {
    line-height: auto;
    text-transform: uppercase;
  }
  
  p {
    line-height: 32px;
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