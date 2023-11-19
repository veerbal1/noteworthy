'use client';

import DeleteNote from '@/app/(pages)/notes/[note-id]/_components/delete-note-button';
import { deleteFormAction } from '@/lib/actions';
import { useFormState } from 'react-dom';

const DeleteNoteForm = ({ id }: { id: string }) => {
  const initialState = {
    message: '',
  };
  const dispatch = deleteFormAction.bind(null, id);
  const [state, formAction] = useFormState(dispatch, initialState);
  return (
    <form action={formAction}>
      <DeleteNote />
    </form>
  );
};

export default DeleteNoteForm;
