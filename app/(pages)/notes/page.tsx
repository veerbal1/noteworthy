import Link from 'next/link';
import NewNoteButton from '../_components/new-note-button';

function Notes() {
  return (
    <div>
      Notes
      <div className="absolute right-0 mx-7 top-0">
        <Link href="/notes/new">
          <NewNoteButton />
        </Link>
      </div>
    </div>
  );
}

export default Notes;
