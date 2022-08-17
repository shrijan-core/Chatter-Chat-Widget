import { useState, useContext, useEffect } from 'react';

// context
import { UserContext } from '@/context';

// common
import ChatLive from './common/ChatLive';
import UserForm from './common/UserForm';

const Support = () => {
  const userData = useContext(UserContext);
  const { showForm } = userData;

  return (
    <div className='bg-neutral-100 p-6 overflow-hidden h-[calc(100vh-229px)] xxs:h-[50vh] overflow-y-auto chatter-scrollbar'>
      {showForm ? <UserForm onSkip={() => null} /> : <ChatLive />}
    </div>
  );
};

export default Support;
