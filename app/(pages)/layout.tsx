import Header from './_components/header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-4">
      <Header />
      <div className="flex w-full h-screen gap-14 pt-4">
        <div className="left w-56 ">Left</div>
        <div className="right">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
