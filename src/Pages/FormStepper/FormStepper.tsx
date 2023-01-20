import { useAppSelector } from '../../Middleware/hooks';

import Layout from 'Components/common/Layout';
import { HeaderWrapper } from 'Components/common/Layout/Layout.style';
import Header from '../../Components/Header/Header';

const FormStepper = () => {
  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    </Layout>
  );
};

export default FormStepper;
