import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function NotesCard({
  title,
  description,
  ...props
}: {
  title: string;
  description: string;
}) {
  return (
    <Card
      className="w-60 hover:shadow-2xl transition-all cursor-pointer"
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}

export default NotesCard;
