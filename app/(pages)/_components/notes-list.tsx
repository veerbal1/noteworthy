import { auth } from '@/auth';
import { getNotes } from '@/lib/db';

async function NotesList() {
  const session = await auth();
  const { user } = session || { user: null };
  const rows = await getNotes(user?.email);
  return (
    <div>
      <ul>
        {rows.map((row) => (
          <li key={row.id}>
            <div className="text-lg">{row.title}</div>
            <div className="text-sm">{row.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
