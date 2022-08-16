import { useState } from 'react';

// common
import ChatLive from './common/ChatLive';
import UserForm from './common/UserForm';

const Support = () => {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className='bg-neutral-100 p-6 overflow-hidden h-[calc(100vh-229px)] xxs:h-[50vh] overflow-y-auto chatter-scrollbar'>
      {showForm ? <UserForm onSkip={() => setShowForm(false)} /> : <ChatLive />}
    </div>
  );
};

export default Support;
