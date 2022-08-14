import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full h-full bg-neutral-100'>
      <p className='text-primary-500'>Chat widget</p>
    </div>
  );
}

export default App;
