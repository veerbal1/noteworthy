import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Icon from './icons';
import { TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { deleteFormAction } from '@/lib/actions';

function NotesCard({
  id,
  title,
  description,
  link,
  ...props
}: {
  id: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="relative border shadow rounded-xl select-none">
      <Link href={link} className="w-60">
        <Card
          className="relative w-60 h-56 transition-all cursor-pointer shadow-none border-none"
          {...props}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>{description}</CardContent>
        </Card>
      </Link>
      <div className="flex justify-end">
        <DeleteForm id={id} />
      </div>
    </div>
  );
}

const DeleteForm = ({ id }: { id: string }) => {
  const dispatch = deleteFormAction.bind(null, id);
  return (
    <form action={dispatch}>
      <Button className="h-1 w-1 bg-transparent hover:bg-transparent shadow-none transition-all hover:scale-150">
        <Icon className="h-4 cursor-pointer transition-all hover:scale-12">
          <TrashIcon className="text-black" />
        </Icon>
      </Button>
    </form>
  );
};

export default NotesCard;
