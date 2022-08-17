import React from 'react';

// packages
import isUrl from 'is-url';
import { Transforms, Editor } from 'slate';
import imageExtensions from 'image-extensions';
import { useSlateStatic, useSelected, useFocused } from 'slate-react';

type ImageElement = {
  type: 'image';
  url: string;
  children: EmptyText[];
};

type EmptyText = {
  text: string;
};

const withImages = (editor: Editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    if (element.type === 'form') return true;
    else if (element.type === 'image') return true;
    return isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData('text/plain');

    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertImage = (editor: Editor, url: any) => {
  const text = { text: '' };
  if (!url) return;
  const image: ImageElement = { type: 'image', url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const Element = (props: any) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'image':
      return <Image {...props} />;
    case 'form':
      return <p {...attributes}>open form</p>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Image = (props: any) => {
  const { attributes, children, element } = props;
  //   const editor = useSlateStatic();
  //   const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      {children}
      <div contentEditable={false} className={`relative w-max`}>
        <img
          src={element.url}
          className={`block, w-full, h-20 ${
            selected && focused ? 'outline outline-primary-300' : ''
          }`}
        />
      </div>
    </div>
  );
};

const InsertImageButton: React.FC = () => {
  const editor = useSlateStatic();
  return (
    <button
      className='text-neutral-600 hover:text-neutral-900 text-h6'
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt('Enter the URL of the image:');
        if (url && !isImageUrl(url)) {
          alert('URL is not an image');
          return;
        }
        insertImage(editor, url);
      }}
    >
      <i className='fa fa-paperclip' />
    </button>
  );
};

const isImageUrl = (url: string) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();
  if (!ext) return;
  return imageExtensions.includes(ext);
};

export { withImages, InsertImageButton, Element };
