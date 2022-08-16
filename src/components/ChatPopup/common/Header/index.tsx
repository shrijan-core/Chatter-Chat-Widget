const ChatHeader = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className='px-10 py-5 bg-primary-500 text-neutral-100'>
      <button
        className='p-2 absolute right-4 top-2 text-h5 visible xxs:hidden'
        onClick={onClose}
      >
        <i className='fa fa-close' />
      </button>
      <p className='text-h5 leading-h5 mb-2 text-neutral-100'>Hello,</p>
      <p className='text-p'>
        We help your business grow by connecting you to your customers. Leave us
        a message.
      </p>
    </div>
  );
};

export default ChatHeader;
