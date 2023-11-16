import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Avatar as ShadCNAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';

function Avatar() {
  return (
    <Popover>
      <PopoverTrigger>
        <ShadCNAvatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/55359171?v=4" />
          <AvatarFallback>VS</AvatarFallback>
        </ShadCNAvatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-gray-950">Veerbal Singh</h3>
          <h4 className="text-zinc-800">veerbalsingh1@gmail.com</h4>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button>
              <div className="hidden md:block">Sign Out</div>
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Avatar;
