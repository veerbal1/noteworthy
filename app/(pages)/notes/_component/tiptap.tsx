import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './toolbar';
import Heading from '@tiptap/extension-heading';
import Bullet from '@tiptap/extension-bullet-list';
// import TextAlign from '@tiptap/extension-text-align';
// import Link from '@tiptap/extension-link';
// import Image from '@tiptap/extension-image';
// import Highlight from '@tiptap/extension-highlight';
// import TextStyle from '@tiptap/extension-text-style';
// import './Tiptap.css';  // Import CSS for styling the editor

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class:
            'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          levels: [2],
        },
      }),
      Bullet.configure({
        HTMLAttributes: {
          class: 'my-6 ml-6 list-disc [&>li]:mt-2',
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          'w-full min-h-[250px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="tiptap-editor">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
