import SidebarItem from './sidebar-item';

function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col">
      <SidebarItem title="Notes" link="/notes" />
    </div>
  );
}

export default Sidebar;
