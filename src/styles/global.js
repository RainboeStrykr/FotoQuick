import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif
  }

  body,
  html,
  #root {
    // Size
    width: 100%;
    min-height: 100%;

    // Colors
    background-color: ${({ theme }) => theme.colors.primaryBackground};

    // Display
    display: flex;
  }

  :root {
    // Colors
    --primary-background: #1F1F1F;
    --secondary-background: #010101;
    --primary-foreground: #FFFFFF;
    --secondary-foreground: #F5F5F5;
    --primary-blue: #116DF7;
    --secondary-blue: #18A0FB;
    --primary-yellow: #F3DE1E;
    --primary-red: #FD3232;

    // Spacement
    --margin: 1rem;
    --margin2x: 2rem;
    --margin4x: 4rem;
    --margin6x: 6rem;
    --button-padding: 0.875rem 0.625rem;

    // Font
    --font-base: 1.125rem;

    --primary-border-radius: 0.75rem;
  }

  // Reset CSS
  li {
    list-style: none // Remove list bullets
  }

  button {
    background-color: transparent // Remove default background
  }

  button,
  input[type=range],
  select {
    cursor: pointer;

    border-style: none // Remove default border
  }

  // Shortcuts
  code {
    // Spacement
    padding: 5px;

    border-radius: 5px;

    // Font
    font-family: 'Fira Code';

    // Colors
    background-color: var(--primary-background);
    color: var(--primary-foreground)
  }

  // Accessbility
  button:focus,
  label:focus,
  select:focus,
  svg:focus {
    outline: 1px dashed var(--primary-blue)
  }

  // Spinner animations
  @keyframes spinner-bounce {
    0%, 80%, 100% {
      transform: scale(0)
    }
    40% {
      transform: scale(1)
    }
  }
`;

export default Global;
