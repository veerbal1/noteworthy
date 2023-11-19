'use client';

import { Button } from '@/components/ui/button';
import { ReloadIcon, TrashIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';

function DeleteNote() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? (
        <ReloadIcon className="animate-spin mr-2" />
      ) : (
        <TrashIcon className=" mr-2" />
      )}
      Delete Note
    </Button>
  );
}

export default DeleteNote;
