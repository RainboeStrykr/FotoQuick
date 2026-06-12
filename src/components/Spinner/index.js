// Components (styles)
import styled from "styled-components";

const Container = styled.div`
  // Spacement: centered
  margin: 0 auto;

  // Size
  width: 5rem;
  height: 1.125rem;

  // Display
  display: flex;
  justify-content: space-between;
  text-align: center;

  // Bounces
  > div {
    // Sizes
    width: 1.125rem;
    height: 1.125rem;

    border-radius: 100%;

    // Dispostion (display)
    display: inline-block;

    // Colors
    background-color: var(--secondary-foreground);

    // Default animation
    animation: spinner-bounce 1.4s infinite ease-in-out both;
  }

  // Bounce (delay between each animation)
  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

function Spinner() {
  return (
    <Container>
      <div />
      <div />
      <div />
    </Container>
  );
}

export default Spinner;
