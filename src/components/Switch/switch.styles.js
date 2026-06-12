import styled from 'styled-components';

export const CustomSwitch = styled.label`
  // Position
  position: relative;
  display: inline-block;

  // Size
  width: 4.5rem;
  height: 2.25rem;

  // Input
  input[type="checkbox"] {
    display: none
  }

  // Switch
  span {
    // Position
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    cursor: pointer;

    border-radius: 2.25rem;

    // Colors
    background-color: var(--secondary-blue);
    transition: background-color .2s ease;
  }

  span::before {
    // Position
    position: absolute;
    content: "";
    left: 2px;
    top: 1px;

    // Size
    width: 2.125rem;
    height: 2.125rem;

    border-radius: 50%;

    // Colors
    background-color: var(--secondary-foreground);
    box-shadow: 0 0.5rem 2rem 0.5rem rgba(0, 0, 0, .32);
    transition: transform .3s ease;
  }

  // Before checked
  input[type="checkbox"]:checked + span::before {
    transform: translateX(2.25rem);
    background-color: var(--secondary-foreground)
  }

  // After checked
  input[type="checkbox"]:checked + span {
    background-color: var(--primary-blue)
  }
`;
