import React, { useState, useEffect } from 'react';

import TabsWeb from './index-web';
import TabsMobile from './index-mobile';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Tabs: React.FC = () => {
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

  return windowSize.innerWidth > 425 ? <TabsWeb /> : <TabsMobile />;
};

export default Tabs;
