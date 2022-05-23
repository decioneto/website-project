import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    //TYPOGRAPHY
    --title-font-family: font-family: 'Merriweather', serif;
    --body-font-family: 'Inria Sans', sans-serif;
    
    //FONT-SIZE
    --h1-font-size: 3rem;
    --h2-font-size: 2rem;
    --h3-font-size: 1.5rem;
    --h4-font-size: 1.25rem;
    --h5-font-size: 1rem;
    --h6-font-size: 1rem;

    --body-lg: 1.25rem;
    --body-md: 1rem;
    --body-sm: 0.875rem;
    --body-xs: 0.75rem;

    //FONT-WEIGHT
    --h1-font-weight: 400;
    --h2-font-weight: 400;
    --h3-font-weight: 400;
    --h4-font-weight: 700;
    --h5-font-weight: 400;
    --h6-font-weight: 700;

    --body-regular: 400;
    --body-bold: 700;

    // COLOR STYLES
    --black: #000;
    --gray-10: #1F1B29;
    --gray-25: #2E2A36;
    --gray-50: #616161;
    --gray-100: #99969E;
    --gray-200: #BAB9BD;
    --gray-300: #DEDEE0;
    --gray-400: #ECECEE;
    --gray-500: #F3F3F5;
    --gray-600: #FAFAFA;

    --purple-100: #5603AD;
    --purple-200: #8367C7;
    --purple-300: #B99CFF;

    --dark-purple-100: #1D0B31;
    --dark-purple-200: #6A637C;
    --dark-purple-300: #CDC6DD;

    --lime-100: #B3E9C7;
    --lime-200: #C2F8CB;
    --lime-3100: #F0FFF1;

    --primary-gradient: linear-gradient(180deg, var(--purple-100) 0%, var(--lime-100) 100%);

    //EFECTS STYLES
    --button-shadow: -4px 4px 16px rgba(39, 39, 39, 0.21);
    --button-purple-shadow: -4px 4px 16px rgba(131, 103, 199, 0.4);

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 960px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray-600);
    font-family: var(--body-font-family);
    font-weight: var(--body-regular);
    font-size: var(--body-md);
    color: var(--dark-purple-100);
  }

  button {
    cursor: pointer;
    font-family: var(--body-font-family);
    font-size: var(--body-sm);
    font-weight: var(--body-bold);
    text-transform: uppercase;
  }

  input, textarea, select {
    font-family: var(--body-font-family);
    font-weight: var(--body-regular);
    font-size: var(--body-md);
    color: var(--dark-purple-100);
  }

`;