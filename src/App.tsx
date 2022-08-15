import { useState } from 'react';

// components
import ChatPopup from '@/components/ChatPopup';
import WidgetToggle from '@/components/WidgetToggle';

function App() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className='bg-neutral-300 relative w-screen h-screen'>
      <ChatPopup isOpen={open} />
      <WidgetToggle toggle={toggle} isOpen={open} />
    </div>
  );
}

export default App;
