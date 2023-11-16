import Link from 'next/link';
import NewNoteButton from '../_components/new-note-button';
import { getNotes } from '@/lib/db';
import { auth } from '@/auth';
import NotesList from '../_components/notes-list';
import { Suspense } from 'react';

async function Notes() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NotesList />
      </Suspense>
      <div className="absolute right-0 mx-7 top-0">
        <Link href="/notes/new">
          <NewNoteButton />
        </Link>
      </div>
    </div>
  );
}

export default Notes;
