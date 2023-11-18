import { Button } from '@/components/ui/button';
import { Pencil1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

function EditNote({ nodeId }: { nodeId: string }) {
  return (
    <Link href={`${nodeId}/edit`}>
      <Button>
        <Pencil1Icon className="text-lg mr-2" />
        Edit Note
      </Button>
    </Link>
  );
}

export default EditNote;
