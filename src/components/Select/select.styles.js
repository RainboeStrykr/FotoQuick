import styled from 'styled-components';

export const CustomSelect = styled.select`
  // Spacement
  padding: 0.375rem 1.8rem 0.375rem 0.875rem;

  // Font
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;

  // Colors
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primaryForeground};

  border-radius: 5px;

  appearance: none; // Remove default arrow -> Firefox issues
  // Replace removed arrow
  background-image: ${({ theme }) => theme.title === 'dark'
    ? 'url(/images/icons/arrowDownLight.svg)'
    : 'url(/images/icons/arrowDownDark.svg)'
  };
  background-repeat: no-repeat;
  background-position: 92%;
  background-size: auto;

  // Options
  option {
    margin-top: 0.5rem
  }
`;
