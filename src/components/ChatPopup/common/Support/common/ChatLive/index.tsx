import { useState, useRef, useCallback } from 'react';

// packages
import { FileError, FileRejection, useDropzone } from 'react-dropzone';

import ChatBody from '../ChatBody';
import SlateEditor from '../SlateEditor';

export interface ImageFile extends File {
  preview?: string;
  errors?: FileError[];
}

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
          type: 'form',
          action: 'open-form',
          children: [
            {
              text: 'All channels are unique, the easiest way to deliver information to target audiences is to use Campaigns.',
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
  const [myFiles, setMyFiles] = useState<ImageFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback(
    (acceptedFiles: ImageFile[], fileRejections: FileRejection[]) => {
      setMyFiles([
        ...myFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
      fileRejections.forEach((file) => {
        file.errors?.forEach((err) => {
          alert(err.message);
          if (err.code === 'file-too-large') {
            console.log({
              type: 'error',
              title: `Error: ${err.message}`,
            });
          }

          if (err.code === 'file-invalid-type') {
            console.log({
              type: 'error',
              title: `Error: ${err.message}`,
            });
          }
        });
      });
      if (acceptedFiles.length > 0) {
        injectImage(acceptedFiles);
      }
    },
    [myFiles, chatMessages]
  );

  const injectImage = (files: File[]) => {
    const temp: any = [];
    const newFiles = {
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
          url: temp,
          children: [
            {
              text: '',
            },
          ],
        },
      ],
    };
    console.log(chatMessages);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        temp.push(reader.result);
        setChatMessages([...chatMessages, newFiles]);
        setMyFiles([]);
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    });
  };

  const { open, getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxSize: 10000000,
    onDrop: onDrop,
    maxFiles: 1,
  });

  const onSendMessage = (message: any) => {
    const newMessages = {
      id: 1,
      userInfo: {
        avatar:
          'https://cdn.pixabay.com/photo/2022/06/29/10/58/fox-7291456__340.jpg',
        username: 'Daniel Russell',
      },
      createdAt: '2022-07-18T08:11:05.508Z',
      message,
    };
    setChatMessages([...chatMessages, newMessages]);
  };

  return (
    <div
      className=' rounded-lg shadow-main p-6 h-full flex flex-col'
      {...getRootProps()}
    >
      <div
        className={`flex flex-1 mb-3 overflow-hidden overflow-y-auto chatter-scrollbar
        `}
      >
        <ChatBody
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
        <input {...getInputProps()} />
      </div>
      <div
        ref={inputRef}
        className='flex p-4 relative rounded-lg bg-neutral-200 items-start'
      >
        <SlateEditor open={open} onSend={onSendMessage} />
      </div>
    </div>
  );
};

export default ChatLive;
