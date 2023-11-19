import { auth } from '@/auth';
import { getNotes } from '@/lib/db';
import NotesCard from './note-card';

async function NotesList() {
  const session = await auth();
  const { user } = session || { user: null };
  const rows = await getNotes(user?.email);
  return (
    <div className="flex gap-2 flex-wrap justify-center w-full">
      {rows.map((row) => (
        <NotesCard
          id={row.id}
          key={row.id}
          title={row.title}
          description={row.description}
          link={`/notes/${row.id}`}
        />
      ))}
    </div>
  );
}

export default NotesList;
