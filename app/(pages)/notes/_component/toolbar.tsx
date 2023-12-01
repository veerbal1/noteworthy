'use client';
import { type Editor } from '@tiptap/react';
import { Toggle } from '@/components/ui/toggle';
import {
  FontItalicIcon,
  StrikethroughIcon,
  FontBoldIcon,
  ListBulletIcon,
  HeadingIcon,
} from '@radix-ui/react-icons';

type Props = {
  editor: Editor | null;
};
function Toolbar({ editor }: Props) {
  if (!editor) return null;
  return (
    <div className="border bg-transparent border-input rounded-sm">
      <Toggle
        size="sm"
        pressed={editor.isActive('heading')}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 4 }).run()
        }
      >
        <HeadingIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <FontItalicIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <StrikethroughIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <ListBulletIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
}

export default Toolbar;
