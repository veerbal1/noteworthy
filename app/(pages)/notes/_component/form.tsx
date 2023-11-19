'use client';

import { Textarea } from '@/components/ui/textarea';
import SubmitButton from './submit-button';
import { noteSubmissionAction } from '@/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

function Form({
  id,
  title,
  description,
}: {
  id?: string;
  title?: string;
  description?: string;
}) {
  const dispatch = noteSubmissionAction.bind(null, id || '');
  const [] = useFormState(dispatch, initialState);
  return (
    <div className="flex-1">
      <form className="flex flex-col gap-4 items-start" action={dispatch}>
        <Textarea
          defaultValue={title}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl outline-none border-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none shadow-none pb-2"
          placeholder="Title"
          rows={1}
          autoFocus
          contentEditable
          name="title"
        />
        <Textarea
          contentEditable
          defaultValue={description}
          className="leading-7 [&:not(:first-child)]:mt-6 outline-none border-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none shadow-none"
          name="description"
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default Form;
