import React, { useMemo, useState } from 'react';

// packages
import { withHistory } from 'slate-history';
import {
  createEditor,
  Descendant,
  Editor,
  BaseElement,
  Transforms,
} from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';

// slate-utils
import { withImages, Element } from './imageSlate';

// types
import { SlateEditorProps } from './types';

declare module 'slate' {
  interface CustomTypes {
    Editor: ReactEditor;
    Element: BaseElement & {
      id?: string;
      type?: string;
    };
  }
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
      },
    ],
  },
  {
    type: 'image',
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'You can delete images with the cross in the top left. Try deleting this sheep:',
      },
    ],
  },
  {
    type: 'image',
    url: 'https://source.unsplash.com/zOwZKwZOZq8',
    children: [{ text: '' }],
  },
];

const SlateEditor = ({ open, onSend }: SlateEditorProps) => {
  const editor = useMemo<Editor>(
    () => withImages(withHistory(withReact(createEditor()))),
    []
  );

  const [value, setValue] = useState<Descendant[] & { type?: string }>([
    {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    },
  ]);

  function resetValue() {
    Transforms.delete(editor, {
      at: {
        anchor: Editor.start(editor, []),
        focus: Editor.end(editor, []),
      },
    });
  }

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <div className='absolute flex items-center justify-center w-8 h-8 bottom-3'>
        <button
          className='text-neutral-600 hover:text-neutral-900 text-h6'
          onClick={open}
        >
          <i className='fa fa-paperclip' />
        </button>{' '}
      </div>
      <div className='w-full h-max-[140px] overflow-y-auto pl-9 mr-9'>
        <Editable
          style={{
            maxHeight: '140px',
            width: '100%',
            minHeight: 'auto',
            maxWidth: '710px',
          }}
          renderElement={(props) => <Element {...props} />}
          placeholder='Send a message'
        />
      </div>
      <div className='absolute flex items-center justify-center w-8 h-8 bottom-3 right-3'>
        <button
          className='text-primary-500 text-h6 hover:text-primary-300'
          onClick={() => {
            // onSend(value);
            resetValue();
          }}
        >
          <i className='fa fa-paper-plane' />
        </button>
      </div>
    </Slate>
  );
};

export default SlateEditor;
