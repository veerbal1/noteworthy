import Link from 'next/link';
import NotesList from '../_components/notes-list';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

async function Notes() {
  return (
    <div className="flex ">
      <div className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <NotesList />
        </Suspense>
      </div>
      <div className="sidebar w-28 justify-center">
        <Link href="/notes/create">
          <Button>
            <PlusIcon className="mr-2" />
            New
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Notes;
