import { getNotesContent } from '@/lib/db';
import { notFound } from 'next/navigation';

async function NoteDetails({ params }: { params: { 'note-id': string } }) {
  const { status, rows } = await getNotesContent(params['note-id']);
  if (status.type === 'error') {
    notFound();
    return;
  }
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {row.title}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {row.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NoteDetails;
