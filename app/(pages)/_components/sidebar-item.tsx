'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = ({
  title,
  link,
  className,
}: {
  className?: string;
  title: string;
  link: string;
}) => {
  const pathName = usePathname();
  const selected = pathName === link;
  return (
    <Link
      href={link}
      className={cn(
        'text-base p-3.5 rounded-r-full cursor-pointer hover:bg-gray-100',
        selected && 'bg-yellow-200 hover:bg-yellow-200',
        className
      )}
    >
      {title}
    </Link>
  );
};

export default SidebarItem;
