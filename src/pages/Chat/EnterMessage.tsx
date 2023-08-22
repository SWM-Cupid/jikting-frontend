import { ImageButton } from 'components/Button';
import Send from 'assets/images/send.svg';
import * as S from './style';
import { useState } from 'react';

export const EnterMessageForm = ({ sendMessage }: { sendMessage(message: string): void }) => {
  const [message, setMessage] = useState('');

  const handleMessageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (message) {
      sendMessage(message);
      setMessage('');
    }
  };
  return (
    <S.EnterMessage>
      <S.ChatInput value={message} onChange={handleMessageInputChange} onKeyUp={handleKeyUp} />
      <ImageButton onClick={handleButtonClick}>
        <Send />
      </ImageButton>
    </S.EnterMessage>
  );
};
