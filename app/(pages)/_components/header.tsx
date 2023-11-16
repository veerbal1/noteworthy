import Logo from '@/app/_components/logo';
import Avatar from './avatar';

function Header() {
  return (
    <div className="w-full shadow-md h-12 flex items-center justify-between pl-10 pr-6">
      <Logo />
      <Avatar />
    </div>
  );
}

export default Header;
