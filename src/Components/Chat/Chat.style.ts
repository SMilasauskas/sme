import styled, { css } from 'styled-components';

export const IconContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.white};
`;

export const ChatIcon = styled.div`
  position: absolute;
  right: 61px;
  bottom: 45px;
  cursor: pointer;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blueColor};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    right: 10px;
    bottom: 10px;
  }
`;

export const ChatContainer = styled.div`
  position: absolute;
  right: 61px;
  bottom: 45px;
  width: 430px;
  box-shadow: 0px 10px 40px #0000001a;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 26px 17px 19px 24px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 45px);
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    right: 10px;
    bottom: 10px;
    width: 290px;
  }
`;
