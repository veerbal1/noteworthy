import NotesList from '../_components/notes-list';
import { Suspense } from 'react';

async function Notes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotesList />
    </Suspense>
  );
}

export default Notes;
