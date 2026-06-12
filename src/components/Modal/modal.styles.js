import styled from 'styled-components';

export const Wrapper = styled.div`
  // Position: center
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  // Size
  width: 31.25rem;

  border-radius: 29px;

  // Spacement
  padding: var(--margin4x);

  // Colors
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0 0.5rem 2rem 1rem rgba(0, 0, 0, .32);

  // Close button
  button {
    // Position: upper-right
    position: absolute;
    right: var(--margin4x);

    // Colors
    background-color: transparent;

    cursor: pointer
  }
  button:hover > svg {
    fill: var(--primary-blue);
    transition: fill .2s ease-in-out
  }
  button:hover > svg > path {
    stroke: var(--primary-foreground);
    transition: stroke .2s ease-in-out
  }
`;

export const Overlay = styled.div`
  // Position: full screen
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  // Colors
  background-color: var(--primary-background);
  opacity: 0.56
`;
