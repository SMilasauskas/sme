import styled from 'styled-components';
import { Field } from 'formik';

export const CheckboxContent = styled.label`
  padding: 20px 0 0 0;

  font-size: 14px;
  color: ${(props) => props.theme.colors.greyText};
  min-height: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 20px 1fr;

  .text {
    margin: 7px auto auto 20px;
    line-height: 20px;
  }
`;

export default styled(Field)`
  width: 20px;
  height: 20px;
  border-color: ${(props) => props.theme.colors.greyLabel};
  padding-right: 10px;

  &:checked {
    background: ${(props) => props.theme.colors.blueColor};
    border-color: ${(props) => props.theme.colors.blueColor};
  }
`;

export const CheckBoxTextWrapper = styled.span`
  padding: 0 0 0 20px;
  display: block;
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
`;

export const StyledError = styled.div`
  padding: 10px 5px 8px 20px;
  display: block;
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
`;
