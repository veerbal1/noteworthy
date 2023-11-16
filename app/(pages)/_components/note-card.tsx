import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function NotesCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="w-60 hover:shadow-2xl transition-all cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}

export default NotesCard;
