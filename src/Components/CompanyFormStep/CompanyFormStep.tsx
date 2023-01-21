import Dropdown from 'Components/common/Dropdown';
import Input from 'Components/common/Input';
import { COUNTRIES_LIST } from '../../constants/stepperConstants';

const CompanyFormStep = () => {
  return (
    <div>
      <Input placeholder="Company Code" name="companyCode" type="text" />

      <Input placeholder="Company Name" name="companyName" type="text" />

      <Dropdown name="companyCountryRegistration" options={COUNTRIES_LIST} optionValue="value" />
    </div>
  );
};

export default CompanyFormStep;
