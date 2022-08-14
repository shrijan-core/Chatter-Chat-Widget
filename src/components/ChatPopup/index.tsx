import { motion } from 'framer-motion';

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
        open: { opacity: 1, y: -80 },
        closed: { opacity: 0, y: 0 },
      }}
      className='w-[426px] rounded-lg bg-neutral-100 p-6 h-[480px] shadow-main absolute right-10 bottom-10'
    >
      <p>Chat Popup</p>
    </motion.div>
  );
};

export default ChatPopup;
