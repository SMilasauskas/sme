import styled, { css } from 'styled-components';
import { StepPropsT, StepT } from './StepperProgress';

export const StepsContainer = styled.div`
  max-width: 220px;
  font-size: 16px;
`;

export const Percent = styled.div`
  color: ${(props) => props.theme.colors.blueColor};
  padding-bottom: 10px;
`;

export const Step = styled.div<StepPropsT>`
  max-width: 220px;
  width: 100%;
  margin-bottom: 1px;
  min-height: 50px;
  display: flex;
  margin-left: 10px;
  vertical-align: middle;
  align-items: center;

  ${(props) => getStepByStatus(props.stepStatus)}
`;

export const passedStep = css`
  color: ${(props) => props.theme.colors.blueColor};
  border-left: 2px solid ${(props) => props.theme.colors.blueColor};
`;

export const currentStep = css`
  color: ${(props) => props.theme.colors.greyText};
  border-left: 2px solid ${(props) => props.theme.colors.greyText};
`;

export const futureStep = css`
  color: ${(props) => props.theme.colors.greyLabel};
  border-left: 2px solid ${(props) => props.theme.colors.greyLabel};
`;

export const StepName = styled.div`
  padding: 15px 10px 15px 25px;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const CheckIconWrapper = styled.div`
  vertical-align: middle;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.blueColor};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const stepToStyleMap: { [$key: string]: any } = { currentStep, futureStep, passedStep };

const getStepByStatus = (stepStatus: StepT = 'futureStep') => {
  return stepToStyleMap[stepStatus];
};
