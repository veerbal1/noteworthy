import SidebarItem from './sidebar-item';

function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col">
      <SidebarItem title="Notes" link="/notes" />
      <SidebarItem title="Reminders" link="/notes/reminders" />
    </div>
  );
}

export default Sidebar;
