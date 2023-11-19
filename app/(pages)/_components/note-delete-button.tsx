'use client';

import { Button } from '@/components/ui/button';
import { ReloadIcon, TrashIcon } from '@radix-ui/react-icons';
import Icon from './icons';
import { useFormStatus } from 'react-dom';

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button className="h-1 w-1 bg-transparent hover:bg-transparent shadow-none transition-all">
          <Icon className="h-4 cursor-pointer transition-all">
            <ReloadIcon className="text-black animate-spin" />
          </Icon>
        </Button>
      ) : (
        <Button className="h-1 w-1 bg-transparent hover:bg-transparent shadow-none transition-all hover:scale-150">
          <Icon className="h-4 cursor-pointer transition-all hover:scale-12">
            <TrashIcon className="text-black" />
          </Icon>
        </Button>
      )}
    </>
  );
};

export default DeleteButton;
