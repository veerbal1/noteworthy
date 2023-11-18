import { Button } from '@/components/ui/button';
import { TrashIcon } from '@radix-ui/react-icons';

function DeleteNote() {
  return (
    <Button>
      <TrashIcon className="mr-2" />
      Delete Note
    </Button>
  );
}

export default DeleteNote;
