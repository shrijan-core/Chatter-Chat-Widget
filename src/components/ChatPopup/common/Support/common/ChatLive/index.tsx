import { useState, useRef, useEffect } from 'react';
import ChatBody from '../ChatBody';
import SlateEditor from '../SlateEditor';

const convMessages = {
  messages: [
    {
      id: 1,
      userInfo: {
        avatar:
          'https://cdn.pixabay.com/photo/2022/06/29/10/58/fox-7291456__340.jpg',
        username: 'Daniel Russell',
      },
      createdAt: '2022-07-18T08:01:02.508Z',
      message: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Hello, some text here',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: 'second text',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      userInfo: {
        avatar:
          'https://cdn.pixabay.com/photo/2022/06/29/10/58/fox-7291456__340.jpg',
        username: 'Daniel Russell',
      },
      createdAt: '2022-07-18T08:11:05.508Z',
      message: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'All channels are unique, the easiest way to deliver information to target audiences is to use Campaigns.',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      userInfo: {
        avatar:
          'https://cdn.pixabay.com/photo/2022/06/29/10/58/fox-7291456__340.jpg',
        username: 'Daniel Russell',
      },
      createdAt: '2022-07-18T08:11:05.508Z',
      message: [
        {
          type: 'image',
          url: [
            'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg',
            // 'https://cdn.pixabay.com/photo/2018/07/10/10/40/travel-3528324__340.jpg',
          ],
          children: [
            {
              text: '',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      userInfo: {
        avatar:
          'https://cdn.pixabay.com/photo/2022/06/29/10/58/fox-7291456__340.jpg',
        username: 'Daniel Russell',
      },
      createdAt: '2022-07-18T08:11:05.508Z',
      message: [
        {
          type: 'image',
          url: [
            'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg',
            'https://cdn.pixabay.com/photo/2018/07/10/10/40/travel-3528324__340.jpg',
            'https://cdn.pixabay.com/photo/2022/07/14/05/56/jellyfish-7320516__340.jpg',
            'https://cdn.pixabay.com/photo/2021/10/13/09/01/corgi-6705821__340.jpg',
          ],
          children: [
            {
              text: '',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      userInfo: {
        avatar:
          'https://cdn.pixabay.com/photo/2022/06/28/20/31/cat-7290531__340.jpg',
        username: 'Jerome Bell',
      },
      createdAt: '2022-07-18T09:00:00.508Z',
      message: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'All channels are unique, the easiest way to deliver information to target audiences is to use Campaigns.',
            },
          ],
        },
      ],
    },
  ],
};

const ChatLive = () => {
  const [chatMessages, setChatMessages] = useState<any[]>(
    convMessages.messages
  );
  const [inputHeight, setInputHeight] = useState(56);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className=' rounded-lg shadow-main p-6 h-full flex flex-col'>
      <div
        className={`flex flex-1 mb-3 overflow-hidden overflow-y-auto chatter-scrollbar
        `}
      >
        <ChatBody
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
      <div
        ref={inputRef}
        className='flex p-4 relative rounded-lg bg-neutral-200 items-start'
      >
        <SlateEditor />
      </div>
    </div>
  );
};

export default ChatLive;
