import styled from 'styled-components';

export const IntroContent = styled.div`
  padding: 0 17px 11px 11px;
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Title = styled.span`
  font-size: 20px;
`;
export const ChevronWrapper = styled.div`
  cursor: pointer;
  margin: 6px;
`;

export const LinkRow = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  gap: 12px;
  color: ${(props) => props.theme.colors.blueColor};
`;

export const LinkPersonalData = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const VARow = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const VAText = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.greyText};
`;

export const VAIndicator = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.green};
`;

export const VAIntroBox = styled.div`
  margin-right: 8px;
  padding: 14px 24px 19px 17px;
  border-radius: 10px 10px 0 10px;
  background-color: ${(props) => props.theme.colors.chatResponseBackground};
`;

export const VAIntroText = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  white-space: pre-line;
`;

export const VAIntroCorner = styled.div`
  width: 40px;
  min-height: 19px;
  align-self: flex-end;
  display: flex;
  opacity: 1;
  position: relative;
  margin-right: 8px;
  background: linear-gradient(
    to bottom left,
    ${(props) => props.theme.colors.chatResponseBackground} 50%,
    ${(props) => props.theme.colors.white} 50%
  );
`;

export const ContactContent = styled.div`
  padding: 0 17px 11px 11px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export const LinkContactContainer = styled.div`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blueColor};
  border: 1px solid #2b64f5;
  border-radius: 20px;
`;

export const CompanyLinkWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
`;

export const LinkContact = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blueColor};
  border: 1px solid #2b64f5;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 8px auto 0 0;
  font-size: 16px;

  .phone {
    margin: 12px auto 0 0;
  }
`;

export const ChatInputBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 11px 18px;
  min-height: 79px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.chatInputBackground};
  gap: 16px;
`;

export const ChatInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 56px;
  width: 100%;
`;

export const ChatInput = styled.textarea.attrs((props) => ({
  type: 'text',
  rows: '2',
}))`
  display: flex;
  flex-direction: column;
  border: none;
  background-color: inherit;
  resize: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
  }
`;

export const CharCounter = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: ${(props) => props.theme.colors.chatCharCounter};
  user-select: none;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.white};
`;

export const ChatIcon = styled.div`
  position: relative;
  cursor: pointer;
  bottom: 3px;
  min-width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blueColor};
`;
