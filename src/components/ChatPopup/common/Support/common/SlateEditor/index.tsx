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
      <div className='absolute flex items-center justify-center w-8 h-8 bottom-2.5'>
        <button
          className='text-neutral-600 hover:text-neutral-900 text-h6'
          onClick={open}
        >
          <i className='fa fa-paperclip' />
        </button>{' '}
      </div>
      <div className='w-full h-max-[60px] overflow-y-auto pl-9 mr-9'>
        <Editable
          style={{
            maxHeight: '60px',
            width: '100%',
            minHeight: 'auto',
            maxWidth: '330px',
          }}
          renderElement={(props) => <Element {...props} />}
          placeholder='Send a message'
        />
      </div>
      <div className='absolute flex items-center justify-center w-8 h-8 bottom-2.5 right-3'>
        <button
          className='text-primary-500 text-h6 hover:text-primary-300'
          onClick={() => {
            onSend(value);
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
