import { getNotesContent } from '@/lib/db';
import { Suspense } from 'react';
import Form from '../../_component/form';

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
        <Form
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
