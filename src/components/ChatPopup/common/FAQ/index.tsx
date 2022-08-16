const FAQ = () => {
  const FaqItem = ({ title, link }: { title: string; link?: string }) => {
    return (
      <a
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={link}
        className='py-5 text-neutral-900 flex flex-row justify-between items-center border-b border-neutral-200'
      >
        <p>{title}</p>
        <div className='w-6 h-6 text-center text-neutral-500'>
          <i className='fa fa-angle-right'></i>
        </div>
      </a>
    );
  };

  return (
    <div className='w-full px-10 h-[calc(100vh-229px)] xxs:h-[260px] overflow-y-auto chatter-scrollbar'>
      {Array.from({ length: 4 }, (_, i) => i).map((i) => {
        return (
          <FaqItem
            title={`# Frequently Asked Question ${i + 1}`}
            link={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
