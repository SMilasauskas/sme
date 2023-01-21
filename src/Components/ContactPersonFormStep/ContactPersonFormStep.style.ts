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

export const CheckBoxText = styled.span`
  line-height: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.greyText};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    line-height: 16px;
    font-size: 10px;
  }
`;

export const CheckBoxTextButton = styled.span`
  line-height: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.blueColor};
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    line-height: 16px;
    font-size: 10px;
  }
`;

export const TextSheet = styled.div`
  max-height: 639px;
  overflow: auto;
  padding-right: 20px;
`;
