import React, { useContext, useId } from 'react';

// packages
import _ from 'lodash';
import { Gallery, Item } from 'react-photoswipe-gallery';
import InfiniteScroll from 'react-infinite-scroll-component';

// components
import Avatar from '@/components/Avatar';

// utils
import { isSameSender } from './util';

// types
import { ChatBodyProps, ChatMessageProps } from './types';

// context
import { UserContext, UserDispatchContext } from '@/context';

const ChatBody: React.FC<ChatBodyProps> = ({
  chatMessages,
  setChatMessages,
}) => {
  // const { messages } = convMessages;
  const userId = 2;
  const userData = useContext(UserContext);
  const setUserData = useContext(UserDispatchContext);

  const ChatMessage: React.FC<ChatMessageProps> = ({
    message,
    createdAt,
    sameSender,
    isOwnReply,
  }) => {
    if (!message) return <p>Loading...</p>;
    const results = _.flatMap(message, ({ children }) =>
      _.map(children, (item) => item.text)
    );

    function getMessageData() {
      // for multiline message
      if (message.length > 1) return [{ type: 'paragraph', data: results }];

      // for single line message
      return _.map(message, ({ type, url }) => {
        if (type === 'paragraph') return { type, data: results };
        return { type, data: url || [] };
      });
    }

    const TextMessageBody = ({ texts }: { texts: string[] }) => {
      return (
        <div
          className={`rounded-lg p-3 
            ${isOwnReply ? 'bg-primary-500' : 'bg-neutral-200'}
            ${
              !sameSender
                ? isOwnReply
                  ? 'rounded-br-none'
                  : 'rounded-bl-none'
                : ''
            }
            `}
        >
          {' '}
          {texts.map((text, index) => (
            <p
              key={`chat-${index}`}
              className={`text text-s
                  ${isOwnReply ? 'text-neutral-100' : ''}
                  `}
            >
              {text}
            </p>
          ))}
        </div>
      );
    };

    const ImageMessageBody = ({ images }: { images: string[] }) => {
      const galleryId = useId();
      const gridCols =
        images.length <= 3 ? `grid-cols-${images.length}` : 'grid-cols-3';
      return (
        <div className={`grid ${gridCols} gap-1`}>
          <Gallery id={`image-${galleryId}`} withDownloadButton={true}>
            {images.map((image, idx) => (
              <Item
                key={`image-${idx}`}
                original={image}
                content={
                  <div className='flex items-center justify-center w-full h-full pointer-events-none'>
                    <img
                      src={image}
                      className='object-contain w-full h-full'
                      alt={`image-${idx}`}
                    />
                  </div>
                }
              >
                {({ ref, open }) => (
                  <img
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    ref={ref}
                    onClick={open}
                    className={`${
                      images.length === 1
                        ? 'w-full h-full'
                        : 'w-[80px] h-[80px]'
                    } cursor-pointer object-cover rounded-4`}
                    src={image}
                  />
                )}
              </Item>
            ))}
          </Gallery>
        </div>
      );
    };

    const LinkMessageBody = ({ links }: { links: string[] }) => {
      function openForm() {
        setUserData({ ...userData, showForm: true });
      }
      return (
        <div
          className={`rounded-lg p-3 
            ${isOwnReply ? 'bg-primary-500' : 'bg-neutral-200'}
            ${
              !sameSender
                ? isOwnReply
                  ? 'rounded-br-none'
                  : 'rounded-bl-none'
                : ''
            }
            `}
        >
          <a
            className='cursor-pointer text-primary-500 underline'
            onClick={() => openForm()}
          >
            Open
          </a>
        </div>
      );
    };

    const ChatMessageBodyRender = ({
      type,
      data,
    }: {
      type: string;
      data: string[];
    }) => {
      switch (type) {
        case 'paragraph':
          return <TextMessageBody texts={data} />;
        case 'image':
          return <ImageMessageBody images={data} />;
        case 'form':
          return <LinkMessageBody links={data} />;
        default:
          return <TextMessageBody texts={data} />;
      }
    };

    return (
      <div
        className={`flex justify-end gap-3
        ${isOwnReply ? '' : 'flex-row-reverse'}
        ${sameSender ? 'mt-1' : 'mt-10'}
        `}
      >
        <div
          className={`flex max-w-[70%] items-center gap-3
          ${isOwnReply ? 'flex-row-reverse' : ''}
        `}
        >
          {getMessageData().map((item, index) => (
            <ChatMessageBodyRender
              key={`chat-message-${index}`}
              type={item.type}
              data={item.data}
            />
          ))}
        </div>

        {sameSender ? (
          <div className='w-10 h-10' />
        ) : (
          <div className='flex'>
            <Avatar
              size={'sml'}
              src='https://cdn.pixabay.com/photo/2022/06/29/10/58/fox-7291456__340.jpg'
            />
          </div>
        )}
      </div>
    );
  };

  // dummy fetchData fuction to load more data on top
  const fetchData = () => {
    const tempData = {
      id: Math.floor(Math.random() * 2) + 1,
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
    };
    // console.log('fetching data', chatMessages.concat(tempData));
    setTimeout(() => {
      setChatMessages([tempData, ...chatMessages]);
    }, 500);
  };

  return (
    <div
      id='scrollableDiv'
      className={`mt-auto h-full overflow-y-auto w-full box-border flex flex-col-reverse chatter-scrollbar`}
    >
      {chatMessages && chatMessages.length > 0 ? (
        <InfiniteScroll
          dataLength={chatMessages.length}
          next={fetchData}
          hasMore={true}
          inverse={true}
          loader={<h4>Loading...</h4>}
          className=''
          endMessage={
            <p className='text-center'>
              <b>Yay! You have seen it all</b>
            </p>
          }
          scrollableTarget='scrollableDiv'
        >
          {/* <div className='flex flex-col'> */}
          {chatMessages.map((item, index) => {
            return (
              <div key={`chat${index}`} className=''>
                <ChatMessage
                  key={`chat${index}`}
                  message={item.message}
                  createdAt={item.createdAt}
                  sameSender={isSameSender(chatMessages, index)}
                  isOwnReply={item.id !== userId}
                />
              </div>
            );
          })}
          {/* </div> */}
        </InfiniteScroll>
      ) : (
        <h1>No messages</h1>
      )}
    </div>
  );
};

export default ChatBody;
