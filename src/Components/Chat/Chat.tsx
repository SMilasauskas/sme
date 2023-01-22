import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ChatBox from '../../Components/ChatBox/ChatBox';
import { toggleChat } from '../../Middleware/slices/chat';
import { useAppSelector, useAppDispatch } from '../../Middleware/hooks';
import { ChatIcon, IconContainer, ChatContainer } from './Chat.style';

const Chat = () => {
  const isExpanded = useAppSelector((state) => state.chat.isExpanded);
  const dispatch = useAppDispatch();

  return (
    <>
      {!isExpanded && (
        <ChatIcon
          onClick={() => {
            dispatch(toggleChat());
          }}
        >
          <IconContainer>
            <FontAwesomeIcon
              icon={solid('comment')}
              flip="horizontal"
              size="2xl"
              className={'chatIcon'}
            />
          </IconContainer>
        </ChatIcon>
      )}
      {isExpanded && (
        <ChatContainer>
          <ChatBox />
        </ChatContainer>
      )}
    </>
  );
};

export default Chat;
