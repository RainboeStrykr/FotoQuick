import styled from 'styled-components';

export const Heading = styled.h2`
  // Font
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 39px;

  // Colors
  color: ${({ theme }) => theme.colors.primaryForeground};
`;

export const MainText = styled.p`
  // Spacement
  margin-top: 2rem;
  margin-bottom: 1rem;

  // Font
  font-style: normal;
  font-weight: 500;
  font-size: var(--font-base);
  line-height: 1.25rem;

  // Colors
  color: ${({ theme }) => theme.colors.secondaryForeground}
`;

export const Button = styled.button`
  // Spacement
  margin-top: var(--margin);
  padding: var(--button-padding);

  // Size
  width: max-content;
  height: 3rem;

  border-radius: var(--primary-border-radius);

  // Font
  font-style: normal;
  font-size: var(--font-base);
  font-weight: 500;

  // Colors
  background-color: var(--primary-blue);
  transition: background-color .2s ease-in-out;
  color: var(--primary-foreground);

  cursor: pointer;

  &:hover {
    background-color: #007BCE;
  }
`;
