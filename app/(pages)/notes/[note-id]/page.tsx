import { getNotesContent } from '@/lib/db';
import { notFound } from 'next/navigation';
import EditNote from '../../_components/edit-note';
import DeleteNote from '../../_components/delete-note';
import { Suspense } from 'react';
import { deleteFormAction } from '@/lib/actions';

async function NoteDetails({ params }: { params: { 'note-id': string } }) {
  return (
    <Suspense fallback={<div className="flex w-full gap-2">Loading...</div>}>
      <div className="flex w-full gap-2">
        <Content id={params['note-id']} />
        <div className="sticky right-0 mr-4 flex flex-col gap-2">
          <EditNote nodeId={params['note-id']} />
          <DeleteNoteForm id={params['note-id']} />
        </div>
      </div>
    </Suspense>
  );
}

const DeleteNoteForm = ({ id }: { id: string }) => {
  const dispatch = deleteFormAction.bind(null, id);
  return (
    <form action={dispatch}>
      <DeleteNote />
    </form>
  );
};

const Content = async ({ id }: { id: string }) => {
  const { status, rows } = await getNotesContent(id);
  if (status.type === 'error') {
    notFound();
    return;
  }
  return (
    <div className="flex-1">
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
};

export default NoteDetails;
