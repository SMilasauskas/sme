import Dropdown from 'Components/common/Dropdown';
import Input from 'Components/common/Input';

import { PhoneNumberWrapper } from './ContactPersonFormStep.style';

import { COUNTRIES_LIST } from '../../constants/stepperConstants';

const ContactPersonFormStep = () => {
  return (
    <div>
      <Input placeholder="Name" name="name" type="text" />
      <Input placeholder="Surname" name="surname" type="text" />
      <Input placeholder="Job title" name="jobTitle" type="text" />
      <Input placeholder="E-mail address" name="address" type="email" />

      <PhoneNumberWrapper>
        <Dropdown name="Country code" options={COUNTRIES_LIST} optionValue="phoneCode" />

        <Input placeholder="Phone No." name="phoneNumber" type="text" />
      </PhoneNumberWrapper>
    </div>
  );
};

export default ContactPersonFormStep;
