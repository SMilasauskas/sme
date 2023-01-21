import { Percent, StepsContainer, Step, StepName, CheckIconWrapper } from './StepperProgress.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export type StepperProgressT = {
  stepNames: Array<string>;
  step: number;
};

export type StepT = 'passedStep' | 'currentStep' | 'futureStep';

export type StepPropsT = {
  stepStatus: StepT;
};

const StepperProgress = ({ stepNames, step }: StepperProgressT) => {
  const stepPercent = ((100 / (stepNames.length + 1)) * step).toFixed(0);

  return (
    <StepsContainer>
      <Percent>{`${stepPercent}%`}</Percent>

      {stepNames.map((stepName, index) => {
        if (index < step) {
          return (
            <Step stepStatus="passedStep" key={stepName}>
              <StepName>{stepName}</StepName>

              <CheckIconWrapper>
                <FontAwesomeIcon icon={solid('check')} size="2xs" />
              </CheckIconWrapper>
            </Step>
          );
        }

        if (index === step) {
          return (
            <Step stepStatus="currentStep" key={stepName}>
              <StepName>{stepName}</StepName>
            </Step>
          );
        }

        return (
          <Step stepStatus="futureStep" key={stepName}>
            <StepName>{stepName}</StepName>
          </Step>
        );
      })}
    </StepsContainer>
  );
};

export default StepperProgress;
