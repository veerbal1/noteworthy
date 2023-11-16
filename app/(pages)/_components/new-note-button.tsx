import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

function NewNoteButton() {
  return (
    <Button>
      <PlusIcon className='mr-2'/>
      Create
    </Button>
  );
}

export default NewNoteButton;
