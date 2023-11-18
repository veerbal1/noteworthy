import { Button } from '@/components/ui/button';
import { Pencil1Icon } from '@radix-ui/react-icons';

function EditNote() {
  return (
    <Button>
      <Pencil1Icon className='text-lg mr-2'/>
      Edit Note
    </Button>
  );
}

export default EditNote;
