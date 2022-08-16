// common
import ChatLive from './common/ChatLive';
import UserForm from './common/UserForm';

const Support = () => {
  return (
    <div className='bg-neutral-100 p-6 overflow-hidden h-[50vh] overflow-y-auto chatter-scrollbar'>
      {/* <UserForm /> */}
      <ChatLive />
    </div>
  );
};

export default Support;
