import Header from './_components/header';
import Sidebar from './_components/sidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-4">
      <Header />
      <div className="flex w-full h-screen gap-14 pt-4">
        <div className="left w-56 ">
          <Sidebar />
        </div>
        <div className="right w-full h-full relative">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
