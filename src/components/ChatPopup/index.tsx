// packages
import { motion } from 'framer-motion';

// commpon components
import Brand from './common/Brand';
import ChatTabs from './common/Tabs';
import ChatHeader from './common/Header';

// types
import { ChatPopupProps } from './types';

const ChatPopup = ({ isOpen }: ChatPopupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      transition={{
        y: { type: 'spring', stiffness: 300, damping: 100 },
        opacity: { duration: 0.2 },
        default: { ease: 'easeInOut' },
      }}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, y: -80, visibility: 'visible' },
        closed: { opacity: 0, y: 0, visibility: 'hidden' },
      }}
      className='w-[426px] overflow-hidden rounded-lg rounded-b-none bg-neutral-100 shadow-main absolute right-10 bottom-10'
    >
      <ChatHeader />
      <ChatTabs />
      <Brand />
    </motion.div>
  );
};

export default ChatPopup;
