import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../Middleware/hooks';
import { expandText } from '../../Middleware/slices/stepper';
import { StyledForm, StepWrapper, Title, ButtonsWrapper } from './Form.style';
import CompanyFormStep from '../CompanyFormStep/CompanyFormStep';
import ContactPersonFormStep from '../ContactPersonFormStep/ContactPersonFormStep';
import { initialState, nextStep, previousStep } from '../../Middleware/slices/stepper';
import Button from '../common/Button';
import { stepNames } from '../../Pages/FormStepper/FormStepper.constants';
import { stepsValidationSchema } from '../../utils/yupValidationSchemas/form';

type FormT = { step: number };

const Form = ({ step }: FormT) => {
  const dispatch = useAppDispatch();
  const isExpanded = useAppSelector((state) => state.stepper.isExpandedText);
  const numberOfSteps = stepNames.length;
  const isLastStep = step === numberOfSteps;
  const isFirstStep = step === 0;

  const { fields } = initialState;
  const renderStepComponent = (step: number) => {
    switch (step) {
      case 1:
        return <CompanyFormStep />;
      case 2:
        return <ContactPersonFormStep />;
      default:
        return <div>No info</div>;
    }
  };

  const nextFormStep = () => {
    dispatch(nextStep());
  };

  const prevFormStep = () => {
    if (isExpanded) {
      dispatch(expandText());
    } else {
      dispatch(previousStep());
    }
  };

  const handleSubmit = (
    values: any,
    actions: { setTouched: (arg0: {}) => void; setSubmitting: (arg0: boolean) => void },
  ) => {
    actions.setTouched({});

    if (isLastStep) {
      submitForm(values);

      return;
    }

    actions.setSubmitting(false);
    nextFormStep();
  };

  const submitForm = (props: any) => {};

  return (
    <Formik
      initialValues={fields}
      onSubmit={handleSubmit}
      validationSchema={
        stepsValidationSchema[step] ? stepsValidationSchema[step] : Yup.object().shape({})
      }
    >
      {(props) => (
        <StyledForm id={'form ' + step} onSubmit={props.handleSubmit}>
          <Title>{stepNames[step]}</Title>

          <StepWrapper>{renderStepComponent(step)}</StepWrapper>

          <ButtonsWrapper>
            <Button disabled={isFirstStep} onClick={prevFormStep} color="outlined" text="Back" />
            {!isExpanded && <Button text={isLastStep ? 'Submit' : 'Next'} type={'submit'} />}
          </ButtonsWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
