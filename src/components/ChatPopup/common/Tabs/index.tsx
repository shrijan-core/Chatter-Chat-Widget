import { useRef, useState } from 'react';

// packages
import { motion, AnimatePresence } from 'framer-motion';

// common components
import FAQ from '../FAQ';
import Support from '../Support';
import { useMeasure } from './useMeasure';

const TabButton = ({
  title,
  iconName,
  onClick,
  active,
}: {
  title: string;
  iconName: string;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 border-b-4 text-p box-border h-12
          ${
            active
              ? 'border-primary-500 text-primary-500'
              : 'border-neutral-500 text-neutral-500'
          }`}
    >
      <i className={`fa fa-${iconName} mr-2`} />
      {title}
    </button>
  );
};

const ChatTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const ref = useRef(null);
  const bounds = useMeasure(ref);

  function renderTabContent() {
    switch (activeTab) {
      case 0:
        return <FAQ />;
      case 1:
        return <Support />;
      default:
        return <FAQ />;
    }
  }

  function getAutoHeightDuration(height: number) {
    if (!height) return 0;
    const constant = height / 36;
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }

  return (
    <div className='bg-neutral-100'>
      <div className='flex flex-row'>
        <TabButton
          iconName='comments'
          title='FAQ'
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
        />
        <TabButton
          iconName='headset'
          title='Support'
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={'collapsed'}
          animate={activeTab === 0 ? 'open' : 'collapsed'}
          exit={'collapsed'}
          inherit={false}
          variants={{
            open: {
              height: 260,
            },
            collapsed: { height: '40vh' },
          }}
          transition={{
            ease: 'easeInOut',
            duration: getAutoHeightDuration(bounds.height) / 1000,
          }}
        >
          <div ref={ref}>{renderTabContent()}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ChatTabs;
