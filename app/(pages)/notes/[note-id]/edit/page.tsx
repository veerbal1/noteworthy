import { getNotesContent } from '@/lib/db';
import EditForm from './form';

async function EditNote({
  params,
}: {
  params: {
    'note-id': string;
  };
}) {
  const { rows } = await getNotesContent(params['note-id']);
  return (
    <div className="flex w-full gap-2 pr-20">
      {rows.map((row) => (
        <EditForm
          key={row.id}
          id={row.id}
          title={row.title}
          description={row.description}
        />
      ))}
    </div>
  );
}

export default EditNote;
