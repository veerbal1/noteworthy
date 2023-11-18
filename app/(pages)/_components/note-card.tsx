import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

function NotesCard({
  title,
  description,
  link,
  ...props
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} className='w-60'>
      <Card
        className="w-60 hover:shadow-2xl transition-all cursor-pointer"
        {...props}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </Link>
  );
}

export default NotesCard;
