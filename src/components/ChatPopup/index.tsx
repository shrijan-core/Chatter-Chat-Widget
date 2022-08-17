import React, { useState, useEffect } from 'react';

import ChatPopupWeb from './index-web';
import ChatPopupMobile from './index-mobile';

// types
import { ChatPopupProps } from './types';

// context
import { UserProvider } from '@/context';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const ChatPopup: React.FC<ChatPopupProps> = ({ isOpen, onClose }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowSize.innerWidth > 425 ? (
    <UserProvider>
      <ChatPopupWeb isOpen={isOpen} />
    </UserProvider>
  ) : (
    <UserProvider>
      <ChatPopupMobile isOpen={isOpen} onClose={onClose} />
    </UserProvider>
  );
};

export default ChatPopup;
