import { getNotesContent } from '@/lib/db';
import EditForm from '../../_component/form';
import { Suspense } from 'react';

async function EditNote({
  params,
}: {
  params: {
    'note-id': string;
  };
}) {
  return (
    <div className="flex w-full gap-2 pr-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Content noteId={params['note-id']} />
      </Suspense>
    </div>
  );
}

const Content = async ({ noteId }: { noteId: string }) => {
  const { rows } = await getNotesContent(noteId);
  return (
    <>
      {rows.map((row) => (
        <EditForm
          key={row.id}
          id={row.id}
          title={row.title}
          description={row.description}
        />
      ))}
    </>
  );
};

export default EditNote;
