// packages
import { motion } from 'framer-motion';

// commpon components
import Brand from './common/Brand';
import ChatTabs from './common/Tabs';
import ChatHeader from './common/Header';

// types
import { ChatPopupProps } from './types';

const ChatPopup = ({ isOpen, onClose }: ChatPopupProps) => {
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
        open: { opacity: 1, y: 0, visibility: 'visible' },
        closed: { opacity: 0, y: 0, visibility: 'hidden' },
      }}
      className='w-full h-full overflow-hidden bg-neutral-100 shadow-main absolute right-0 bottom-0 z-[100000]'
    >
      <ChatHeader onClose={onClose} />
      <ChatTabs />
      <Brand />
    </motion.div>
  );
};

export default ChatPopup;
