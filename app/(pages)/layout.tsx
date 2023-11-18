import Header from './_components/header';
import Sidebar from './_components/sidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Header />
      <div className="flex w-full h-screen gap-3 pt-4">
        <div className="left w-56">
          <Sidebar />
        </div>
        <div className="right flex-1 max-h-screen relative pb-20 overflow-scroll">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
// pr-36 md:pr-48