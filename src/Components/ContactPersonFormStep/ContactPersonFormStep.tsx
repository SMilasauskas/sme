import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../Middleware/hooks';
import { expandText } from '../../Middleware/slices/stepper';
import Dropdown from 'Components/common/Dropdown';
import Input from 'Components/common/Input';
import Checkbox from 'Components/common/Checkbox';
import {
  PhoneNumberWrapper,
  CheckBoxText,
  CheckBoxTextButton,
  TextSheet,
} from './ContactPersonFormStep.style';
import {
  COUNTRIES_LIST,
  PRIVACY_POLICY_TEXT,
  PARTNERSHIP_TEXT,
} from '../../constants/stepperConstants';

export type ExpandedValueT = 'privacy' | 'partnership';

const ContactPersonFormStep = () => {
  const isExpanded = useAppSelector((state) => state.stepper.isExpandedText);
  const dispatch = useAppDispatch();

  // const [isExpanded, setIsExpanded] = useState(false);
  const [expandedValue, setExpandedValue] = useState('privacy');

  const changeExpanded = (value: ExpandedValueT) => {
    dispatch(expandText());
    setExpandedValue(value);
  };

  return isExpanded ? (
    <TextSheet>
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i}>
          <CheckBoxText>
            {expandedValue === 'privacy' ? PRIVACY_POLICY_TEXT : PARTNERSHIP_TEXT}
          </CheckBoxText>
          <br />
          <br />
        </span>
      ))}
    </TextSheet>
  ) : (
    <>
      <Input placeholder="Name" name="name" type="text" />
      <Input placeholder="Surname" name="surname" type="text" />
      <Input placeholder="Job title" name="jobTitle" type="text" />
      <Input placeholder="E-mail address" name="email" type="email" />

      <PhoneNumberWrapper>
        <Dropdown name="phoneCode" options={COUNTRIES_LIST} optionValue="phoneCode" />

        <Input placeholder="Phone No." name="phoneNumber" type="text" />
      </PhoneNumberWrapper>

      <Checkbox name="privacyPolicy">
        <CheckBoxText>{PRIVACY_POLICY_TEXT}</CheckBoxText>
        <CheckBoxTextButton onClick={() => changeExpanded('privacy')}>
          Please click to expand
        </CheckBoxTextButton>
      </Checkbox>

      <Checkbox name="partnership">
        <CheckBoxText>{PARTNERSHIP_TEXT}</CheckBoxText>
        <CheckBoxTextButton onClick={() => changeExpanded('partnership')}>
          Please click to expand
        </CheckBoxTextButton>
      </Checkbox>
    </>
  );
};

export default ContactPersonFormStep;
