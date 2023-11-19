'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import DeleteForm from './note-card-delete-form';

function truncateString(str: string, maxLength: number) {
  // Check if the length of the string is greater than the maxLength
  if (str.length > maxLength) {
    // If so, truncate the string to the maxLength and add '...'
    return str.substring(0, maxLength) + '...';
  } else {
    // Otherwise, return the original string
    return str;
  }
}

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
          <CardContent>{truncateString(description, 140)}</CardContent>
        </Card>
      </Link>
      <div className="flex justify-end">
        <DeleteForm id={id} />
      </div>
    </div>
  );
}

export default NotesCard;
