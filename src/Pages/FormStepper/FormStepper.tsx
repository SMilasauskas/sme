import { useAppSelector } from '../../Middleware/hooks';
import StepperProgress from '../../Components/StepperProgress/StepperProgress';
import { stepNames } from './FormStepper.constants';
import Layout from 'Components/common/Layout';
import Header from '../../Components/Header/Header';
import Card from 'Components/common/Card';
import Form from '../../Components/Form/Form';
import { StepperT } from '../../Middleware/slices/stepper';

import {
  StepperProgressWrapper,
  FormWrapper,
  HeaderWrapper,
} from 'Components/common/Layout/Layout.style';

type StateT = {
  stepper: StepperT;
};

const FormStepper = () => {
  const step = useAppSelector((state: StateT) => state?.stepper?.step);

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <StepperProgressWrapper>
        <StepperProgress stepNames={stepNames} step={step} />
      </StepperProgressWrapper>

      <FormWrapper>
        <Card>
          <Form step={step} />
        </Card>
      </FormWrapper>
    </Layout>
  );
};

export default FormStepper;
