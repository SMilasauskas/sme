import React from 'react';
import { ErrorMessage } from 'formik';
import StyledCheckbox, {
  CheckboxContent,
  StyledError,
  CheckBoxTextWrapper,
} from './Checkbox.style';

type CheckBoxT = {
  children: React.ReactElement | Array<React.ReactElement> | string;
  name: string;
};

const Checkbox = ({ children, name }: CheckBoxT) => {
  return (
    <>
      <CheckboxContent>
        <StyledCheckbox type="checkbox" name={name} />

        <CheckBoxTextWrapper>{children}</CheckBoxTextWrapper>
      </CheckboxContent>

      <ErrorMessage name={name}>
        {(msg) => <StyledError className="errorMessage">{msg}</StyledError>}
      </ErrorMessage>
    </>
  );
};

export default Checkbox;
