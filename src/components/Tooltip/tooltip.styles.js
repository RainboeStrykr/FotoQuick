import styled from 'styled-components';

export const Container = styled.div`
  span {
    // Initial state
    visibility: hidden;

    // Spacement
    margin-left: 2.25rem;
    padding: var(--button-padding);

    // Size
    width: max-content;
    height: 3rem;

    // Colors
    background-color: var(--primary-blue);
    color: #FFFFFF;

    border-radius: var(--primary-border-radius);

    // Position:
    position: absolute;
    z-index: 1;
    &.right { //right after the item¹
      transform: translate3d(-0.625rem, 0, 0);
    }
    &.left {
      // (Remove) default spacement
      margin-left: 0;
      margin-right: 2.25rem;
      transform: translate3d(-8rem, 0, 0)
    }

    // Animation: Out → Back
    transition: all .4s cubic-bezier(0.18, 0.89, 0.32, 1.28)
  }

  span::after {
    content: " ";

    // Position
    position: absolute;

    // Spacement
    margin-top: -5px;

    // Arrow
    border-width: 5px;
    border-style: solid;
    border-color: transparent var(--primary-blue) transparent transparent;
  }
  span.right::after {
    top: 50%;
    right: 100%; // Go to the right
  }
  span.left::after {
    top: 50%;
    left: 100%; // Go to the left
    transform: rotateZ(180deg);
  }

  svg:hover ~ span {
    // Hover (final) state
    visibility: visible;

    // Position
    &.right { // right after the item¹
      transform: translate3d(0, 0, 0)
    }
    &.left {
      transform: translate3d(calc(-100% - 4rem), 0, 0)
    }
  }
`;
