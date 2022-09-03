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
  }

  /* Font Color */
  h1, h2, h3, h4, .subHeading-1, .subHeading-2, .navText {
    color: rgb(var(--white));
  }

  h5 {
    color: rgb(var(--sky));
  }

  /* Font Family */
  h1, h2, h3, h4, .subHeading-1 {
    font-family: 'Bellefair';
  }

  h5, .subHeading-2, .navText {
    font-family: 'Barlow Condensed';
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
    letter-spacing: 4.75px;
  }

  .subHeading-1 {
    font-size: 1.75rem; //28px
  }

  .subHeading-2 {
    font-size: 0.875rem; //14px
    letter-spacing: 2.35px;
  }

  .navText {
    font-size: 1rem; //16px
    letter-spacing: 2.7px;
  }

  /* Line Height */
  h1, h2, h3, h4, h5, .subHeading-1, .subHeading-2, .navText {
    line-height: auto;
  }
  body, p {
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