import styled from 'styled-components';

export const LeftContainer = styled.div`
  // Size
  width: 6rem;
  height: 100%;

  // Colors
  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  position: relative;

  border-radius: 0px 29px 29px 0px;

  // Tools list
  ul {
    // Spacement
    padding: var(--margin6x) 0;

    // Size
    width: 100%;
    height: 100%;

    // Display
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RightContainer = styled(LeftContainer)`
  transition: width .2s ease;

  // Flip border-radius
  border-radius: 29px 0 0 29px;

  ul {
    // (Reduce) Spacement
    padding: var(--margin4x) 0;
  }

  // Remove unnecessary spacements
  ul > li {
    &:nth-child(3),
    &:nth-child(5) {
      margin-bottom: 2rem
    }

    &:nth-child(4) {
      margin-top: 0
    }
  }
`;

export const ItemContent = styled.li`
  // If still upcoming, not allow
  &.upcoming {
    cursor: not-allowed
  }
  // Otherwise...
  cursor: pointer;

  // Spacement
  margin-bottom: var(--margin2x);

  &:nth-child(3),
  &:nth-child(5) {
    margin-bottom: 0
  }

  &:nth-child(4) {
    margin-top: auto
  }

  // Size
  width: 100%;

  // Alignment & position¹
  text-align: center;
  position: relative;

  // Colors
  svg > path {
    fill: ${({ theme }) => theme.colors.secondaryForeground};
    transition: fill .2s ease;
  }
  svg:hover > path {
    fill: ${({ theme }) => theme.colors.primaryForeground};
  }

  // Active items → Add a border to the left
  div.activeItem {
    // Position¹
    position: absolute;

    // Size
    width: 0.25rem;
    height: 2.5rem;
    border-radius: 0px 2.5px 2.5px 0px;

    // Colors
    background-color: var(--secondary-blue)
  }
`;
