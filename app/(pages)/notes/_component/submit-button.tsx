import { Button } from '@/components/ui/button';
import { CheckIcon, ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? (
        <ReloadIcon className="animate-spin mr-2" />
      ) : (
        <CheckIcon className="mr-2" />
      )}
      Save
    </Button>
  );
}

export default SubmitButton;
