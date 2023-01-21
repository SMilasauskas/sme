import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { toggleChat } from '../../Middleware/slices/chat';
import { useAppDispatch } from '../../Middleware/hooks';
import {
  TitleRow,
  Title,
  IntroContent,
  ChevronWrapper,
  LinkRow,
  LinkPersonalData,
  VARow,
  VAText,
  VAIndicator,
  VAIntroBox,
  VAIntroCorner,
  VAIntroText,
  ContactContent,
  CompanyLinkWrapper,
  LinkContact,
  ChatInputBoxWrapper,
  ChatInputBox,
  ChatInput,
  CharCounter,
  ChatIcon,
  IconContainer,
} from './ChatBox.style';
import { useState } from 'react';

const ChatBox = () => {
  const dispatch = useAppDispatch();
  const [charLength, setCharLength] = useState(0);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharLength(e.target.value.length);
  };
  return (
    <>
      <IntroContent>
        <TitleRow>
          <Title>Contact us</Title>
          <ChevronWrapper>
            <FontAwesomeIcon
              icon={solid('chevron-up')}
              size="2xs"
              onClick={() => {
                dispatch(toggleChat());
              }}
            />
          </ChevronWrapper>
        </TitleRow>

        <LinkRow>
          <LinkPersonalData href="/">See how we process personal data</LinkPersonalData>
          <FontAwesomeIcon icon={solid('arrow-up-right-from-square')} size="2xs" />
        </LinkRow>

        <VARow>
          <VAText> Virtual assistant</VAText>
          <VAIndicator />
        </VARow>
      </IntroContent>

      <VAIntroBox>
        <VAIntroText>
          Hi! {'\n\n'} Our virtual assistant is chatting with you right now. It can provide quick
          answers to your questions regarding our products and services and, if necessary, connect
          you with one of our advisers. {'\n\n'}How can we help you today?
        </VAIntroText>
      </VAIntroBox>

      <VAIntroCorner />

      <ContactContent>
        <VAText>Contact us directly via email or phone:</VAText>
        <CompanyLinkWrapper>
          <LinkContact href="tel:+370 685 24435">+370 685 24435</LinkContact>
          <LinkContact href="mailto:info@smefinance.lt">info@smefinance.lt</LinkContact>
        </CompanyLinkWrapper>
      </ContactContent>

      <ChatInputBoxWrapper>
        <ChatInputBox>
          <ChatInput
            onChange={onInputChange}
            placeholder="Write your question here"
            maxLength="140"
          />
          <CharCounter>{charLength}/140</CharCounter>
        </ChatInputBox>

        <ChatIcon>
          <IconContainer>
            <FontAwesomeIcon
              icon={solid('paper-plane')} //paper-plane-top is in Pro version
              size="xl"
            />
          </IconContainer>
        </ChatIcon>
      </ChatInputBoxWrapper>
    </>
  );
};

export default ChatBox;
