export const ChatlogicStyling = (id: string, userId: string) => {
  if (id != userId) {
    return false;
  }
  return true;
};

export const isSameSender = (message: any, index: number) => {
  if (index === 0) {
    return false;
  }
  return message[index].id === message[index - 1].id;
};
