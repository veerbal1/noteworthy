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
import { logout } from '@/lib/actions';
import { auth } from '@/auth';

async function Avatar() {
  const session = await auth();
  const { user } = session || { user: null };
  return (
    <Popover>
      <PopoverTrigger>
        <ShadCNAvatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/55359171?v=4" />
        </ShadCNAvatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-gray-950">{user?.name}</h3>
          <h4 className="text-zinc-800">{user?.email}</h4>
          <form action={logout}>
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
