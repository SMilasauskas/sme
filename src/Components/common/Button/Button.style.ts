import styled, { css } from 'styled-components';
import { ColorT, StyledButtonPropsT } from './Button';

export default styled.button<StyledButtonPropsT>`
  padding: 15px 30px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 26px;
  user-select: none;
  ${(props) => getButtonColor(props.color)}
`;

export const outlined = css`
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.blueColor};
  color: ${(props) => props.theme.colors.blueColor};
`;

export const contained = css`
  background: ${(props) => props.theme.colors.blueColor};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.blueColor};
`;

export const disabled = css`
  background: ${(props) => props.theme.colors.greyLabel};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.greyLabel};
  cursor: default;
`;

const colorToStyleMap: { [$key: string]: any } = { outlined, contained, disabled };

const getButtonColor = (color: ColorT = 'contained') => {
  return colorToStyleMap[color];
};
