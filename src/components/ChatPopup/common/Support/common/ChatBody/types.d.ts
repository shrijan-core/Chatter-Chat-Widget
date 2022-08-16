import React from 'react';

export type ChatBodyProps = {
  // types to update later
  chatMessages: any[];
  setChatMessages: any;
  hasFiles?: boolean;
};

export type ChatMessageProps = {
  sameSender: boolean;
  message: messageProps[];
  createdAt: string;
  isOwnReply: boolean;
};

export type messageProps = {
  type: string;
  url?: string[];
  children: EmptyText[];
};

type EmptyText = {
  text: string;
};
