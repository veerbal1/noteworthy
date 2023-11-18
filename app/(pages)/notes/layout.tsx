import SecondarySidebar from '../_components/secondary-sidebar';

function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden h-full">
      <div className="flex-1 overflow-scroll">{children}</div>
      {/* <div className="w-56 sticky top-0">
        <SecondarySidebar />
      </div> */}
    </div>
  );
}

export default NotesLayout;
