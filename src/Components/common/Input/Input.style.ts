import styled, { css } from 'styled-components';
import { Field } from 'formik';

const onTop = css`
  top: 5px;
`;

export const StyledInput = styled(Field)`
  &:focus + .label {
    top: 8px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.greyLabel};
  }

  &:focus {
    padding: 30px 14px 18px;
    border: 1px solid ${(props) => props.theme.colors.greyLabel};
    outline: none;
  }

  .label {
    ${(props) => props.isvalue && onTop}
    top: 8px;
    color: ${(props) => props.theme.colors.greyLabel};
  }

  &:not([value='']) ~ .label {
    top: 8px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.greyLabel};
  }

  &:not([value='']) {
    background-color: ${(props) => props.theme.colors.grey};
    padding: 30px 14px 18px;
  }

  &::placeholder {
    opacity: 0;
  }

  font-size: 16px;
  padding: 26px 14px 20px;
  border: 1px solid ${(props) => props.theme.colors.borderGreyDarker};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black};
  width: 100%;
  margin-bottom: 10px;
`;

export const InputContent = styled.div`
  width: 100%;
  position: relative;

  .label {
    user-select: none;
    position: absolute;
    color: ${(props) => props.theme.colors.black};
    top: 25px;
    left: 15px;
    transition: all 0.1s ease-in-out;
  }

  .errorMessage {
    padding: 0 5px 8px 20px;
    display: block;
    color: ${(props) => props.theme.colors.red};
    font-size: 12px;
  }
`;
