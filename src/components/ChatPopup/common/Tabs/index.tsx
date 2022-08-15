import { useState } from 'react';

// common components
import FAQ from '../FAQ';
import Support from '../Support';

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
      className={`w-full py-3 border-b-4 text-p
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
  const [activeTab, setActiveTab] = useState(0);

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
      {renderTabContent()}
    </div>
  );
};

export default ChatTabs;
