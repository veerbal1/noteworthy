import { cn } from '@/lib/utils';

function Icon({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      {...props}
      className={cn('right-0 bottom-0 m-4', props.className)}
    >
      {children}
    </div>
  );
}

export default Icon;
