import { Formik } from 'formik';
import { useAppDispatch } from '../../Middleware/hooks';
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
  const numberOfSteps = stepNames.length;
  console.log('numberOfSteps', numberOfSteps);
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
        return <div>Product and Amount step</div>;
    }
  };

  const nextFormStep = () => {
    dispatch(nextStep());
  };

  const prevFormStep = () => {
    dispatch(previousStep());
  };

  const handleSubmit = (
    values: any,
    actions: { setTouched: (arg0: {}) => void; setSubmitting: (arg0: boolean) => void },
  ) => {
    console.log('im here');
    actions.setTouched({});

    if (isLastStep) {
      submitForm(values);

      return;
    }

    actions.setSubmitting(false);
    nextFormStep();
  };

  const submitForm = (props: any) => {
    console.log(props, 'On Submit');
  };

  return (
    <Formik
      initialValues={fields}
      onSubmit={handleSubmit}
      validationSchema={stepsValidationSchema[step]}
    >
      {(props) => (
        <StyledForm id={'form ' + step} onSubmit={props.handleSubmit}>
          <Title>{stepNames[step]}</Title>

          <StepWrapper>{renderStepComponent(step)}</StepWrapper>

          <ButtonsWrapper>
            <Button disabled={isFirstStep} onClick={prevFormStep} color="outlined" text="Back" />
            <Button text={isLastStep ? 'Submit' : 'Next'} type={'submit'} />
          </ButtonsWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
