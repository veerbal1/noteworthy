import { auth } from '@/auth';
import { getNotes } from '@/lib/db';
import NotesCard from './note-card';

async function NotesList() {
  const session = await auth();
  const { user } = session || { user: null };
  const rows = await getNotes(user?.email);
  return (
    <div className="flex gap-2 flex-wrap justify-start">
      {rows.map((row) => (
        <NotesCard title={row.title} description={row.description} />
        //   <li key={row.id}>
        //     <div className="text-lg">{row.title}</div>
        //     <div className="text-sm">{row.description}</div>
        //   </li>
      ))}
    </div>
  );
}

export default NotesList;
