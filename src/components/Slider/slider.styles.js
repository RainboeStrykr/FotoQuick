import styled from 'styled-components';

export const Wrapper = styled.div`
  // Items disposition -> Row
  display: inline-flex;
  align-items: center;

  // Range slider container
  input[type="range"] {
    // Remove default container shape
    appearance: none;

    // Size
    width: 17.5rem;
    height: 2px;

    // Colors
    background-color: var(--secondary-foreground);
  }
  input[type=range]:focus {
    outline: none // Remove default outline styling
  }

  // Knob
  input[type=range]::-webkit-scrollbar-thumb,
  input[type=range]::-moz-range-thumb {
    // (Force) Remove default knob
    appearance: none!important;

    // Size
    width: 1.125rem;
    height: 1.125rem;

    // Colors
    background-color: var(--secondary-blue);
    box-shadow: 0 0 1rem rgba(24 160 251, 0.08)
  }

  // Range slider value
  span.slider__value {
    margin-left: var(--margin); // Spacement between the value and the slider
    padding: var(--margin);

    border-radius: var(--primary-border-radius);

    // Colors
    background-color: var(--primary-blue);
    color: var(--primary-foreground);

    user-select: none; // Prevent from drag the text
  }
`;
