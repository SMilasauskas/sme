import styled from 'styled-components';

export const PhoneNumberWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
