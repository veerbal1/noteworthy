function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden h-full">
      <div className="flex-1 overflow-scroll">{children}</div>
    </div>
  );
}

export default NotesLayout;
