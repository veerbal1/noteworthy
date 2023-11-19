'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import DeleteForm from './note-card-delete-form';

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
    <div className="relative border shadow transition-all rounded-xl select-none hover:shadow-lg flex flex-col">
      <Link href={link} className="w-60">
        <Card
          className="relative w-60 cursor-pointer shadow-none border-none max-h-60"
          {...props}
        >
          <CardHeader className='pb-4'>
            <CardTitle className='overflow-hidden text-ellipsis whitespace-nowrap'>{title}</CardTitle>
          </CardHeader>
          <CardContent className='overflow-hidden h-36'>{description}</CardContent>
        </Card>
      </Link>
      <div className="flex justify-end items-center h-8">
        <DeleteForm id={id} />
      </div>
    </div>
  );
}

export default NotesCard;
