import styled from 'styled-components';
import { Form } from 'formik';

export const ButtonsWrapper = styled.div`
  display: flex;
  max-width: 575px;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 420px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 360px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    // max-width: 575px;
    padding: 30px 20px 20px;
  }
`;

export const StepWrapper = styled.div`
  padding: 60px 0 11px 0;
  max-width: 575px;

  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 420px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 360px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 575px;
    padding: 30px 20px 0;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
