import { useFormState } from 'react-dom';
import DeleteButton from './note-delete-button';
import { deleteFormAction } from '@/lib/actions';

const DeleteForm = ({ id }: { id: string }) => {
  const initialState = {
    message: '',
  };
  const dispatch = deleteFormAction.bind(null, id);
  const [state, formAction] = useFormState(dispatch, initialState);

  return (
    <form action={formAction}>
      <DeleteButton />
    </form>
  );
};

export default DeleteForm;
